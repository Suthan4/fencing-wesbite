type VisualPanelProps = {
  label: string;
  tone?: "light" | "dark";
};

export function VisualPanel({ label, tone = "light" }: VisualPanelProps) {
  const dark = tone === "dark";

  return (
    <div
      className={`relative min-h-[360px] overflow-hidden rounded-lg border ${
        dark
          ? "border-white/15 bg-[#314a26] text-white"
          : "border-[#dbe5d1] bg-[#edf4e6] text-[#172118]"
      }`}
      aria-label={`${label} placeholder image`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(143,179,57,0.32),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.45),transparent)]" />
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-[#314a26]" />
      <div className="absolute bottom-28 left-0 right-0 h-3 bg-[#8fb339]" />
      <div className="absolute bottom-28 left-[8%] h-44 w-4 rounded-t bg-[#24371c]" />
      <div className="absolute bottom-28 left-[26%] h-52 w-4 rounded-t bg-[#24371c]" />
      <div className="absolute bottom-28 left-[44%] h-48 w-4 rounded-t bg-[#24371c]" />
      <div className="absolute bottom-28 left-[62%] h-56 w-4 rounded-t bg-[#24371c]" />
      <div className="absolute bottom-28 left-[80%] h-44 w-4 rounded-t bg-[#24371c]" />
      <div className="absolute bottom-44 left-[8%] right-[10%] h-4 rounded-full bg-[#5f7f32]" />
      <div className="absolute bottom-60 left-[8%] right-[10%] h-4 rounded-full bg-[#5f7f32]" />
      <div className="absolute left-6 top-6 rounded-md bg-white/85 px-4 py-3 text-sm font-bold uppercase tracking-[0.18em] text-[#314a26] shadow-lg">
        {label}
      </div>
    </div>
  );
}
