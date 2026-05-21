type SectionHeadingProps = {
  id?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
};

export function SectionHeading({
  id,
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`mb-10 max-w-2xl ${alignment}`}>
      <h2
        id={id}
        className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
      >
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-base leading-relaxed text-slate-600">{subtitle}</p>
      ) : null}
    </div>
  );
}
