export function Aurora() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-1/4 -left-1/4 h-[60vw] w-[60vw] rounded-full bg-aurora-1 opacity-30 blur-3xl aurora-blob" />
      <div className="absolute top-1/3 -right-1/4 h-[55vw] w-[55vw] rounded-full bg-aurora-2 opacity-25 blur-3xl aurora-blob" style={{ animationDelay: "-7s" }} />
      <div className="absolute -bottom-1/4 left-1/4 h-[50vw] w-[50vw] rounded-full bg-aurora-3 opacity-20 blur-3xl aurora-blob" style={{ animationDelay: "-14s" }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,var(--background)_85%)]" />
      <svg className="absolute inset-0 h-full w-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}
