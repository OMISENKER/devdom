const categories = [
  {
    label: "Frontend",
    skills: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "Express.js", "PHP", "Python"],
  },
  {
    label: "Database & Services",
    skills: ["MongoDB", "MySQL", "Supabase"],
  },
  {
    label: "Tools & Platforms",
    skills: ["Git", "GitHub", "Cloudflare", "Mapbox", "Resend", "OpenAI API", "Jira"],
  },
];

export default function SkillsTools() {
  return (
    <div className="h-svh w-full flex flex-col justify-center px-8 md:px-16 lg:px-24 xl:px-32">
      <div className="w-full max-w-4xl">

        {/* Section header */}
        <div className="flex items-baseline gap-5 mb-10">
          <h2
            className="font-display italic font-bold"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 4.5rem)",
              color: "var(--color-text-primary)",
            }}
          >
            Skills &amp; Tools
          </h2>
          <span
            className="font-body text-xs uppercase tracking-[0.3em]"
            style={{ color: "var(--color-muted)" }}
          >
            04
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map(({ label, skills }) => (
            <div key={label}>
              <p
                className="font-body text-xs uppercase tracking-[0.3em] mb-2"
                style={{ color: "var(--color-muted)" }}
              >
                {label}
              </p>
              <div
                className="h-px w-8 mb-3"
                style={{ backgroundColor: "var(--color-accent)" }}
              />
              <p
                className="font-body text-sm lg:text-base xl:text-lg leading-relaxed"
                style={{ color: "var(--color-text-primary)" }}
              >
                {skills.join(" / ")}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
