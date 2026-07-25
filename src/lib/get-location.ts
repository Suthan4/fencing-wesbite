// src/lib/get-location.ts
// Shared helper for Server Components / generateMetadata functions that
// need the visitor's detected location (set by middleware.ts off Vercel's
// geo headers, or the nf_loc cookie on repeat visits). Falls back to
// Chennai (DEFAULT_LOCATION_SLUG) everywhere else.

import "server-only";
import { headers } from "next/headers";
import {
  getLocation,
  DEFAULT_LOCATION_SLUG,
  LOCATION_HEADER,
  type LocationEntry,
} from "@/lib/locations";

export async function getCurrentLocation(): Promise<LocationEntry> {
  const headerList = await headers();
  const detectedSlug =
    headerList.get(LOCATION_HEADER) ?? DEFAULT_LOCATION_SLUG;
  return getLocation(detectedSlug) ?? getLocation(DEFAULT_LOCATION_SLUG)!;
}