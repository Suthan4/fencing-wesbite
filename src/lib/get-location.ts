// src/lib/get-location.ts
// Shared helper for Server Components / generateMetadata functions that
// need the visitor's detected location (set by middleware.ts off Vercel's
// geo headers, or the nf_loc cookie on repeat visits). Falls back to
// Avinashi (DEFAULT_LOCATION_SLUG) everywhere else.

import "server-only";
import { headers } from "next/headers";
import {
  getPrimaryLocation,
  LOCATION_HEADER,
  type LocationEntry,
} from "@/lib/locations";

export async function getCurrentLocation(): Promise<LocationEntry> {
  const headerList = await headers();
  return getPrimaryLocation(headerList.get(LOCATION_HEADER));
}