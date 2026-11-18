// proxy.ts
// Next.js 16 renamed `middleware.ts` to `proxy.ts` (the `middleware` export
// is deprecated in favour of `proxy`); functionality is unchanged. See
// node_modules/next/dist/docs/01-app/02-guides/upgrading/version-16.md.
//
// This file does two things on every non-API, non-asset request:
//
// 1. Detects the visitor's city from Vercel's edge geolocation headers and
//    forwards it to the page as a request header + cookie (unchanged from
//    the previous middleware.ts).
// 2. Runs an *optimistic* auth check for /admin routes: if there's no valid
//    session cookie, redirect to /admin/login before the page even renders.
//    This is a fast, cookie-only check — the real authorization check
//    happens in the Data Access Layer (src/lib/auth/dal.ts) on every admin
//    page, Server Action, and Route Handler, per Next.js's authentication
//    guide. Proxy is a first line of defence, not the security boundary.

import { NextResponse, type NextRequest } from "next/server";
import {
  resolveLocationFromCityString,
  isPrimaryLocation,
  LOCATION_HEADER,
  LOCATION_COOKIE,
} from "@/lib/locations";
import { verifySessionToken, ADMIN_SESSION_COOKIE } from "@/lib/auth/session";

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // --- Admin auth (optimistic check) ---
  if (pathname.startsWith("/admin")) {
    const sessionCookie = request.cookies.get(ADMIN_SESSION_COOKIE)?.value;
    const session = await verifySessionToken(sessionCookie);
    const isLoginPage = pathname === "/admin/login";

    if (!session && !isLoginPage) {
      const loginUrl = new URL("/admin/login", request.url);
      return NextResponse.redirect(loginUrl);
    }

    if (session && isLoginPage) {
      return NextResponse.redirect(new URL("/admin", request.url));
    }
  }

  // --- Location detection (unchanged) ---
  const rawCookie = request.cookies.get(LOCATION_COOKIE)?.value;
  // Ignore stale cookies (e.g. "chennai") from before primary-only detection.
  const cookieSlug = isPrimaryLocation(rawCookie) ? rawCookie : undefined;
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
  // Run on every page except API routes, static assets and Next internals.
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};