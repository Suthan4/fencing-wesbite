#!/usr/bin/env node
// scripts/hash-password.mjs
// Usage: node scripts/hash-password.mjs "your-new-password"
// Prints a bcrypt hash to paste into ADMIN_PASSWORD_HASH.

import bcrypt from "bcryptjs";

const password = process.argv[2];

if (!password) {
  console.error('Usage: node scripts/hash-password.mjs "your-password"');
  process.exit(1);
}

const hash = await bcrypt.hash(password, 12);
console.log("\nADMIN_PASSWORD_HASH=" + hash + "\n");
