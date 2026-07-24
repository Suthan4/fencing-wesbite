// src/app/admin/login/page.tsx
"use client";

import { useActionState } from "react";
import { login, type LoginState } from "@/app/actions/auth-actions";

export default function AdminLoginPage() {
  const [state, formAction, pending] = useActionState<LoginState, FormData>(
    login,
    null,
  );

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#fafafa] px-5">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <p className="eyebrow mb-2">Navi Fencing</p>
          <h1 className="display text-3xl text-[#1d1d1f]">Admin Login</h1>
        </div>

        <form
          action={formAction}
          className="rounded-2xl border border-[#e5e5ea] bg-white p-6 shadow-sm"
        >
          <div className="mb-4">
            <label
              htmlFor="username"
              className="mb-1.5 block text-[0.8rem] font-medium text-[#515154]"
            >
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              required
              className="w-full rounded-xl border border-[#e5e5ea] px-3.5 py-2.5 text-[0.92rem] text-[#1d1d1f] outline-none transition-colors focus:border-[#0071e3]"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="mb-1.5 block text-[0.8rem] font-medium text-[#515154]"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="w-full rounded-xl border border-[#e5e5ea] px-3.5 py-2.5 text-[0.92rem] text-[#1d1d1f] outline-none transition-colors focus:border-[#0071e3]"
            />
          </div>

          {state?.error && (
            <p className="mb-4 rounded-lg bg-red-50 px-3 py-2 text-[0.82rem] text-red-600">
              {state.error}
            </p>
          )}

          <button
            type="submit"
            disabled={pending}
            className="btn w-full bg-[#1d1d1f] text-white disabled:opacity-50"
          >
            {pending ? "Signing in…" : "Sign in"}
          </button>
        </form>
      </div>
    </main>
  );
}
