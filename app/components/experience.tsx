const experiences = [
  {
    period: "Current",
    company: "WhereToCoffee",
    companyUrl: "https://wheretocoffee.app",
    role: "Full-Stack Developer",
    type: "Remote",
    description: "Building the platform end-to-end — Supabase, Mapbox, Cloudflare",
  },
  {
    period: "Apr – Jun 2025",
    company: "Eskwelabs",
    companyUrl: null,
    role: "Innovation Fellowship Intern",
    type: "Hybrid",
    description:
      "Real-time business dashboard with Python, Google Sheets, OpenAI API, Looker Studio",
  },
  {
    period: "Oct 2024 – Feb 2025",
    company: "Outlier",
    companyUrl: null,
    role: "AI Code Expert Annotator",
    type: "Remote",
    description: "AI/Web Developer expert for tool-use evaluation and model training",
  },
  {
    period: "Oct 2023 – Jun 2024",
    company: "ALPHA",
    companyUrl: "https://alpha-sti.vercel.app/",
    role: "Full-Stack Dev / Front-End Head",
    type: "On-site",
    description: "Led 9 front-end developers — org website, event registration platform",
  },
  {
    period: "Mar – Jul 2023",
    company: "Carisle Media",
    companyUrl: "https://carislemedia.com/",
    role: "Web Developer",
    type: "Remote",
    description: "ATS, CEO's professional site, company website — HTML5, CSS3, JS",
  },
];

export default function Experience() {
  return (
    <div className="h-svh w-full flex flex-col justify-center px-8 md:px-16 lg:px-24 xl:px-32">
      <div className="w-full max-w-4xl">

        {/* Section header */}
        <div className="flex items-baseline gap-5 mb-5">
          <h2
            className="font-display italic font-bold"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 4.5rem)",
              color: "var(--color-text-primary)",
            }}
          >
            Experience
          </h2>
          <span
            className="font-body text-xs uppercase tracking-[0.3em]"
            style={{ color: "var(--color-muted)" }}
          >
            02
          </span>
        </div>

        <div className="ruled-line" />

        {/* Entry list */}
        <div
          className="overflow-y-auto inner-scroll"
          style={{ maxHeight: "calc(100svh - 11rem)" }}
        >
          {experiences.map((exp, i) => (
            <div key={i}>
              <div className="grid grid-cols-[1fr_2fr] gap-4 py-4">
                {/* Left: period + company */}
                <div>
                  <p
                    className="font-body text-xs uppercase tracking-wider"
                    style={{ color: "var(--color-muted)" }}
                  >
                    {exp.period}
                  </p>
                  {exp.companyUrl ? (
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-auric font-display italic"
                      style={{ fontSize: "clamp(1rem, 1.8vw, 1.8rem)" }}
                    >
                      {exp.company}
                    </a>
                  ) : (
                    <p
                      className="font-display italic"
                      style={{
                        fontSize: "clamp(1rem, 1.8vw, 1.8rem)",
                        color: "var(--color-text-primary)",
                      }}
                    >
                      {exp.company}
                    </p>
                  )}
                </div>
                {/* Right: role + description */}
                <div>
                  <p
                    className="font-body text-sm lg:text-base uppercase tracking-wider"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {exp.role}
                  </p>
                  <p
                    className="font-body text-xs lg:text-sm mt-1 leading-relaxed"
                    style={{ color: "var(--color-muted)" }}
                  >
                    {exp.type} — {exp.description}
                  </p>
                </div>
              </div>
              <div className="ruled-line" />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
