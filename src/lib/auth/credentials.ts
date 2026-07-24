// src/lib/auth/credentials.ts
// Verifies admin login credentials against environment variables.
// There is a single admin account by design — see ADMIN_SETUP.md for how
// to set ADMIN_USERNAME / ADMIN_PASSWORD_HASH.

import "server-only";
import bcrypt from "bcryptjs";

export async function verifyAdminCredentials(
  username: string,
  password: string,
): Promise<boolean> {
  const expectedUsername = process.env.ADMIN_USERNAME;
  const passwordHash = process.env.ADMIN_PASSWORD_HASH;

  if (!expectedUsername || !passwordHash) {
    throw new Error(
      "Admin credentials are not configured. Set ADMIN_USERNAME and ADMIN_PASSWORD_HASH. See ADMIN_SETUP.md.",
    );
  }

  // Constant-time-ish username check isn't critical here (usernames aren't
  // secret), but we still avoid short-circuit timing on the password step.
  if (username !== expectedUsername) {
    // Still run a bcrypt compare so failed logins take a similar amount of
    // time whether the username or password was wrong.
    await bcrypt.compare(password, passwordHash);
    return false;
  }

  return bcrypt.compare(password, passwordHash);
}
