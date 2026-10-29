import type { ReactNode } from "react";
import Link from "next/link";
import { site } from "@/lib/site";

const variants = {
  primary: "bg-terracotta text-white hover:bg-terracotta-dark",
  ghost: "border border-ink/15 bg-white text-ink hover:bg-stone",
  dark: "bg-ink text-canvas hover:bg-neutral-800",
  light: "bg-white text-ink hover:bg-stone",
} as const;

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
}) {
  const classNames = `inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition duration-200 ease-out hover:-translate-y-px active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 ${variants[variant]} ${className}`;
  if (href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={classNames}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classNames}>
      {children}
    </Link>
  );
}

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const ink = tone === "light" ? "text-white" : "text-ink";
  return (
    <Link href="/" className="group flex items-center gap-3">
      <span className="grid h-10 w-10 place-items-center rounded-lg bg-ink text-terracotta">
        <svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden="true">
          <path d="M6 15 16 7l10 8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <path d="M9 14.5V25h14V14.5" fill="none" stroke="#f9f9f6" strokeWidth="2" />
        </svg>
      </span>
      <span className={ink}>
        <span className="block font-display text-[15px] font-bold leading-none tracking-tight">B-Edificación</span>
        <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.16em] text-terracotta">
          {site.tagline}
        </span>
      </span>
    </Link>
  );
}
