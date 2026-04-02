const certifications = [
  { name: "IBM Back-end JavaScript Developer Specialization", issuer: "IBM", date: "Dec 2024" },
  { name: "Meta Front-End Developer Specialization", issuer: "Meta", date: "Oct 2024" },
  { name: "Version Control", issuer: "Meta", date: "Aug 2024" },
  { name: "AI For Everyone", issuer: "DeepLearning.AI", date: "Sep 2023" },
  { name: "Lean Six Sigma White Belt", issuer: "Six Sigma PH", date: "Dec 2023" },
  { name: "Project Initiation: Starting a Successful Project", issuer: "Google", date: "Mar 2023" },
  { name: "Foundations of Project Management", issuer: "Google", date: "Oct 2022" },
  { name: "Foundations: Data, Data, Everywhere", issuer: "Google", date: "Nov 2022" },
];

const education = [
  {
    school: "STI College",
    degree: "BS Computer Science",
    period: "Aug 2021 – Apr 2025",
  },
  {
    school: "Mindtech",
    degree: "Creative Web Design & Web Development",
    period: "Oct – Dec 2021",
  },
];

export default function Credentials() {
  return (
    <div className="h-svh w-full flex flex-col px-8 md:px-16 lg:px-24 xl:px-32 py-12 md:py-16">

      {/* Header */}
      <div>
        <div className="flex items-baseline gap-5">
          <h2
            className="font-display italic font-bold"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 4.5rem)",
              color: "var(--color-text-primary)",
            }}
          >
            Credentials
          </h2>
          <span
            className="font-body text-xs uppercase tracking-[0.3em]"
            style={{ color: "var(--color-muted)" }}
          >
            05
          </span>
        </div>
        <div className="ruled-line mt-4" />
      </div>

      {/* Content */}
      <div
        className="flex-1 overflow-y-auto inner-scroll grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 pt-6"
      >
        {/* Certifications */}
        <div>
          <p
            className="font-body text-xs uppercase tracking-[0.3em] mb-4"
            style={{ color: "var(--color-muted)" }}
          >
            Certifications
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
            {certifications.map((cert, i) => (
              <div key={i}>
                <p
                  className="font-body text-xs lg:text-sm leading-snug"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  {cert.name}
                </p>
                <p
                  className="font-body text-xs mt-0.5"
                  style={{ color: "var(--color-muted)" }}
                >
                  {cert.issuer} · {cert.date}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <p
            className="font-body text-xs uppercase tracking-[0.3em] mb-4"
            style={{ color: "var(--color-muted)" }}
          >
            Education
          </p>
          <div className="flex flex-col gap-4">
            {education.map((edu, i) => (
              <div key={i}>
                <p
                  className="font-body text-sm lg:text-base"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  {edu.school}
                </p>
                <p
                  className="font-body text-xs mt-0.5"
                  style={{ color: "var(--color-muted)" }}
                >
                  {edu.degree}
                </p>
                <p
                  className="font-body text-xs"
                  style={{ color: "var(--color-muted)" }}
                >
                  {edu.period}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer / Connect */}
      <div className="pt-4">
        <div className="ruled-line mb-4" />
        <div className="flex items-center justify-between">
          <div className="flex gap-6 md:gap-8">
            <a
              href="https://www.linkedin.com/in/dominique-eclavia"
              target="_blank"
              rel="noopener noreferrer"
              className="link-auric font-body text-xs uppercase tracking-[0.2em]"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/OMISENKER"
              target="_blank"
              rel="noopener noreferrer"
              className="link-auric font-body text-xs uppercase tracking-[0.2em]"
            >
              GitHub
            </a>
            <a
              href="mailto:dominiquealvarez8888@gmail.com"
              className="link-auric font-body text-xs uppercase tracking-[0.2em]"
            >
              Email
            </a>
          </div>
          <p
            className="font-body text-xs"
            style={{ color: "var(--color-muted)" }}
          >
            Dominique Eclavia © 2026
          </p>
        </div>
      </div>

    </div>
  );
}
