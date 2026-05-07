type GlitchTextProps = {
  text: string;
  className?: string;
};

export function GlitchText({ text, className = "" }: GlitchTextProps) {
  return (
    <div className={`relative ${className}`.trim()}>
      <span aria-hidden="true" className="logo-ghost absolute inset-0">
        {text}
      </span>
      <span aria-hidden="true" className="logo-echo absolute inset-0">
        {text}
      </span>
      <span className="relative">{text}</span>
    </div>
  );
}
