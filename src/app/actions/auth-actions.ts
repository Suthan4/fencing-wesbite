"use server";

import { redirect } from "next/navigation";
import { verifyAdminCredentials } from "@/lib/auth/credentials";
import { createAdminSession, deleteAdminSession } from "@/lib/auth/session";

export type LoginState = {
  error?: string;
} | null;

export async function login(
  _prevState: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const username = String(formData.get("username") ?? "").trim();
  const password = String(formData.get("password") ?? "");

    // TEMP DEBUG — remove after
  console.log("Typed username:", JSON.stringify(username));
  console.log("Typed password:", JSON.stringify(password));
  console.log("Expected username (env):", JSON.stringify(process.env.ADMIN_USERNAME));
  console.log("Password hash set?:", !!process.env.ADMIN_PASSWORD_HASH);
  console.log("Password hash value:", process.env.ADMIN_PASSWORD_HASH);

  if (!username || !password) {
    return { error: "Enter your username and password." };
  }

  let valid: boolean;
  try {
    valid = await verifyAdminCredentials(username, password);
  } catch (err) {
    console.error("Admin login misconfigured:", err);
    return {
      error:
        "Admin login isn't configured yet. See ADMIN_SETUP.md for setup steps.",
    };
  }

  if (!valid) {
    return { error: "Invalid username or password." };
  }

  await createAdminSession(username);
  redirect("/admin");
}

export async function logout(): Promise<void> {
  await deleteAdminSession();
  redirect("/admin/login");
}
