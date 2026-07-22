// middleware.ts
// Detects the visitor's city from Vercel's edge geolocation headers and
// forwards it to the page as a request header + cookie, so the homepage
// can render location-aware content (hero, services, nearby areas).
//
// On Vercel, every request automatically carries:
//   x-vercel-ip-city             e.g. "Coimbatore"
//   x-vercel-ip-country-region   e.g. "TN"
//   x-vercel-ip-country          e.g. "IN"
// On any other host these headers are simply absent, and we fall back
// to the default location (Chennai) — the site still works everywhere,
// it just won't auto-detect the city off Vercel.

import { NextResponse, type NextRequest } from "next/server";
import {
  resolveLocationFromCityString,
  LOCATION_HEADER,
  LOCATION_COOKIE,
} from "@/lib/locations";

export function middleware(request: NextRequest) {
  const cookieSlug = request.cookies.get(LOCATION_COOKIE)?.value;
  const ipCity =
    request.headers.get("x-vercel-ip-city") ??
    request.headers.get("x-vercel-ip-city-region");

  const resolved = resolveLocationFromCityString(
    cookieSlug ? undefined : ipCity ? decodeURIComponent(ipCity) : null,
  );

  const slug = cookieSlug ?? resolved.slug;

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(LOCATION_HEADER, slug);

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });

  if (!cookieSlug) {
    response.cookies.set(LOCATION_COOKIE, slug, {
      path: "/",
      maxAge: 60 * 60 * 24 * 30, // 30 days
      sameSite: "lax",
    });
  }

  return response;
}

export const config = {
  // Run on every page except API routes, static assets and Next internals,
  // so the homepage can personalise and location pages keep the cookie fresh.
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
