import Image from "next/image";

type MediaConfig =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string }
  | { type: "placeholder"; text: string };

type Project = {
  number: string;
  name: string;
  url: string;
  status: string;
  description: string;
  stack: string[];
  media: MediaConfig;
};

const projects: Project[] = [
  {
    number: "01",
    name: "WhereToCoffee",
    url: "https://wheretocoffee.app",
    status: "Live",
    description:
      "Full-stack coffee shop discovery platform with a public landing page and a fully functional app with real-time data.",
    stack: ["ReactJS", "Supabase", "Mapbox", "Cloudflare"],
    media: { type: "placeholder", text: "wheretocoffee.app" },
  },
  {
    number: "02",
    name: "AI-driven ATS",
    url: "https://neoats-applicant.vercel.app/",
    status: "Deployed",
    description:
      "HR Applicant Tracking System with AI candidate scoring, interview scheduling, and a complete hiring pipeline.",
    stack: ["MERN Stack", "OpenAI API", "MongoDB"],
    media: { type: "image", src: "/images/ats.png", alt: "AI-driven Applicant Tracking System" },
  },
  {
    number: "03",
    name: "MyDevJourney",
    url: "https://github.com/OMISENKER/my-developer-journey",
    status: "Hackathon Winner",
    description:
      "Developer goal tracking app with GitHub OAuth, daily streaks, and AI-powered Developer Recap insights.",
    stack: ["Next.js", "MongoDB", "GitHub OAuth"],
    media: { type: "video", src: "/videos/devjourney.webm" },
  },
];

export default function Projects() {
  return (
    <div className="h-svh w-full flex flex-col justify-center px-8 md:px-16 lg:px-24 xl:px-32">
      <div className="w-full max-w-5xl">

        {/* Section header */}
        <div className="flex items-baseline gap-5 mb-5">
          <h2
            className="font-display italic font-bold"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 4.5rem)",
              color: "var(--color-text-primary)",
            }}
          >
            Projects
          </h2>
          <span
            className="font-body text-xs uppercase tracking-[0.3em]"
            style={{ color: "var(--color-muted)" }}
          >
            03
          </span>
        </div>

        <div className="ruled-line" />

        {/* Project list */}
        <div
          className="overflow-y-auto inner-scroll"
          style={{ maxHeight: "calc(100svh - 11rem)" }}
        >
          {projects.map((project, i) => (
            <div key={i}>
              <div className="py-5 grid grid-cols-[auto_1fr] gap-4 md:gap-8 items-start">

                {/* Gold number */}
                <span
                  className="font-display font-bold leading-none select-none"
                  style={{
                    fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                    color: "var(--color-accent)",
                    opacity: 0.45,
                  }}
                >
                  {project.number}
                </span>

                {/* Content + media */}
                <div className="flex flex-col md:flex-row gap-4 items-start">

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-baseline gap-3 mb-2">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-auric font-display italic font-bold"
                        style={{ fontSize: "clamp(1.1rem, 2.2vw, 2.2rem)" }}
                      >
                        {project.name}
                      </a>
                      <span
                        className="font-body text-xs uppercase tracking-wider px-2 py-0.5"
                        style={{
                          border: "1px solid rgba(201, 168, 76, 0.4)",
                          color: "var(--color-accent)",
                        }}
                      >
                        {project.status}
                      </span>
                    </div>
                    <p
                      className="font-body text-xs lg:text-sm leading-relaxed mb-3"
                      style={{ color: "var(--color-muted)" }}
                    >
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="font-body text-xs uppercase tracking-wide px-2 py-0.5"
                          style={{
                            border: "1px solid rgba(201, 168, 76, 0.3)",
                            color: "var(--color-text-primary)",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Media */}
                  <div
                    className="w-full md:w-44 h-24 md:h-28 shrink-0 overflow-hidden flex items-center justify-center"
                    style={{ border: "1px solid var(--color-border)" }}
                  >
                    {project.media.type === "video" ? (
                      <video
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                      >
                        <source src={project.media.src} type="video/webm" />
                      </video>
                    ) : project.media.type === "image" ? (
                      <Image
                        src={project.media.src}
                        alt={project.media.alt}
                        width={400}
                        height={225}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span
                        className="font-body text-xs tracking-wider text-center px-3"
                        style={{ color: "var(--color-muted)" }}
                      >
                        {project.media.text}
                      </span>
                    )}
                  </div>

                </div>
              </div>
              {i < projects.length - 1 && <div className="ruled-line" />}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
