// src/app/admin/(protected)/layout.tsx
// Every route under this group is guarded here via the Data Access Layer —
// this is the real authorization check (proxy.ts is only an optimistic
// pre-filter, see proxy.ts for details).

import Link from "next/link";
import { Toaster } from "react-hot-toast";
import { requireAdminSession } from "@/lib/auth/dal";
import { logout } from "@/app/actions/auth-actions";

export default async function AdminProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await requireAdminSession();

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Toaster position="top-right" toastOptions={{ duration: 3500 }} />
      <header className="border-b border-[#e5e5ea] bg-white">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5">
          <Link href="/admin" className="flex items-baseline gap-2">
            <span className="display text-lg text-[#1d1d1f]">Navi Fencing</span>
            <span className="text-[0.75rem] font-medium text-[#86868b]">
              Admin
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <span className="text-[0.82rem] text-[#86868b]">
              {session.username}
            </span>
            <form action={logout}>
              <button
                type="submit"
                className="text-[0.82rem] font-medium text-[#515154] hover:text-[#1d1d1f]"
              >
                Sign out
              </button>
            </form>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-5 py-10">{children}</main>
    </div>
  );
}
