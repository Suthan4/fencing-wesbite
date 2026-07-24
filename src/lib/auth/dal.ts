// src/lib/auth/dal.ts
// Data Access Layer: the single source of truth for "is this request
// authenticated?" Every admin page, Server Action, and Route Handler
// should call verifyAdminSession() (or requireAdminSession()) rather than
// trusting proxy.ts alone — proxy is an optimistic first line of defence,
// not the security boundary.

import "server-only";
import { cache } from "react";
import { redirect } from "next/navigation";
import { getAdminSession } from "./session";

export const verifyAdminSession = cache(async () => {
  const session = await getAdminSession();
  if (!session?.username) {
    return { isAuth: false as const, username: null };
  }
  return { isAuth: true as const, username: session.username };
});

// Use in Server Components / Actions that must not proceed without auth.
export async function requireAdminSession() {
  const session = await verifyAdminSession();
  if (!session.isAuth) {
    redirect("/admin/login");
  }
  return session;
}
