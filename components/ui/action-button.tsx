import type { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

type ActionButtonProps = {
  children: ReactNode;
  className?: string;
  href?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const baseClassName =
  "inline-flex min-w-[13.5rem] items-center justify-between gap-6 rounded-full border border-white/15 bg-white/[0.03] px-5 py-3 font-mono text-[0.78rem] uppercase tracking-[0.28em] text-white transition-colors duration-300 hover:border-signal/60 hover:text-signal";

export function ActionButton({
  children,
  className = "",
  href,
  type = "button",
  ...props
}: ActionButtonProps) {
  const combinedClassName = `${baseClassName} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={combinedClassName} {...props}>
      {children}
    </button>
  );
}
