type VisualPanelProps = {
  label: string;
  tone?: "light" | "dark";
  height?: string;
};

export function VisualPanel({
  label,
  tone = "light",
  height = "min-h-[380px]",
}: VisualPanelProps) {
  const dark = tone === "dark";

  return (
    <div
      className={`relative ${height} overflow-hidden rounded-2xl ${
        dark
          ? "bg-[#0f1f0a] border border-white/10"
          : "bg-[#0f1f0a] border border-[#a8e63d]/20"
      }`}
      aria-label={`${label} illustration`}
    >
      {/* Sky gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1a1f] via-[#0f2510] to-[#1a3a12]" />

      {/* Stars */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-white/30"
          style={{
            left: `${8 + i * 8}%`,
            top: `${5 + (i % 3) * 10}%`,
            opacity: 0.2 + (i % 4) * 0.15,
          }}
        />
      ))}

      {/* Ground */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0d1f0a] to-transparent" />

      {/* Fence posts */}
      {[8, 25, 42, 59, 76, 90].map((left, i) => (
        <div
          key={i}
          className="absolute bottom-16 w-3 rounded-t-sm bg-[#3a5a2a]"
          style={{
            left: `${left}%`,
            height: `${42 + (i % 3) * 12}%`,
          }}
        />
      ))}

      {/* Horizontal rails */}
      <div className="absolute bottom-[36%] left-[4%] right-[4%] h-2.5 rounded-full bg-[#4a7a35] opacity-90" />
      <div className="absolute bottom-[52%] left-[4%] right-[4%] h-2.5 rounded-full bg-[#4a7a35] opacity-80" />
      <div className="absolute bottom-[66%] left-[4%] right-[4%] h-1.5 rounded-full bg-[#a8e63d] opacity-60" />

      {/* Wire detail on top */}
      <div className="absolute bottom-[68%] left-[4%] right-[4%] h-0.5 bg-[#a8e63d]/30" />

      {/* Label badge */}
      <div className="absolute left-4 top-4 flex items-center gap-2 rounded-lg bg-[#a8e63d]/10 border border-[#a8e63d]/30 px-3 py-2 backdrop-blur">
        <div className="h-2 w-2 rounded-full bg-[#a8e63d]" />
        <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#a8e63d]">
          {label}
        </span>
      </div>

      {/* Bottom tag */}
      <div className="absolute bottom-4 right-4 text-[0.6rem] font-semibold uppercase tracking-widest text-white/20">
        Navi Fencing
      </div>
    </div>
  );
}
