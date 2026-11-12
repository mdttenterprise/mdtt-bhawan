interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-3xl ${
        align === "center" ? "mx-auto text-center" : "text-left"
      } mb-12`}
    >
      {eyebrow && (
        <span
          className={`inline-block text-xs font-bold tracking-[0.2em] uppercase mb-3 px-3 py-1 rounded-full ${
            light
              ? "bg-amber-400/20 text-amber-300"
              : "bg-amber-500/15 text-amber-700"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl font-bold tracking-tight leading-tight ${
          light ? "text-white" : "text-[#0B192C]"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base md:text-lg leading-relaxed ${
            light ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}