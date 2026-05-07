import type { ReactNode } from "react";

type PageShellProps = {
  children: ReactNode;
  className?: string;
  panelClassName?: string;
};

export function PageShell({
  children,
  className = "",
  panelClassName = "",
}: PageShellProps) {
  return (
    <main
      className={`relative min-h-screen overflow-hidden bg-obsidian px-4 py-4 text-ivory sm:px-6 sm:py-6 lg:px-8 ${className}`.trim()}
    >
      <div className="screen-grid pointer-events-none absolute inset-0 opacity-30" />
      <div className="scanlines pointer-events-none absolute inset-0 opacity-20" />
      <div className="film-noise pointer-events-none absolute inset-0 opacity-20" />
      <div className="pointer-events-none absolute left-[8%] top-24 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(124,255,178,0.14),transparent_72%)] blur-3xl" />
      <div className="pointer-events-none absolute bottom-20 right-[5%] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.06),transparent_70%)] blur-3xl" />

      <div
        className={`relative z-10 mx-auto flex min-h-[calc(100vh-2rem)] w-full max-w-[96rem] flex-col rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl sm:min-h-[calc(100vh-3rem)] ${panelClassName}`.trim()}
      >
        {children}
      </div>
    </main>
  );
}
