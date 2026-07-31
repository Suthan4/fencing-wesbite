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
      <Toaster position="top-center" toastOptions={{ duration: 3500 }} />
      <header className="sticky top-0 z-20 border-b border-[#e5e5ea] bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:h-16 sm:px-5">
          <Link href="/admin" className="flex items-baseline gap-1.5 sm:gap-2">
            <span className="display text-base text-[#1d1d1f] sm:text-lg">
              Navi Fencing
            </span>
            <span className="text-[0.7rem] font-medium text-[#86868b] sm:text-[0.75rem]">
              Admin
            </span>
          </Link>

          <div className="flex items-center gap-3 sm:gap-4">
            <span className="hidden text-[0.82rem] text-[#86868b] xs:inline sm:inline">
              {session.username}
            </span>
            <form action={logout}>
              <button
                type="submit"
                className="text-[0.82rem] font-medium text-[#515154] hover:text-[#1d1d1f] active:opacity-60"
              >
                Sign out
              </button>
            </form>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-6 pb-[env(safe-area-inset-bottom)] sm:px-5 sm:py-10">
        {children}
      </main>
    </div>
  );
}
