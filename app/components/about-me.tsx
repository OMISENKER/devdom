import Image from "next/image";

export default function AboutMe() {
  return (
    <div className="h-svh w-full flex items-center justify-center px-8 md:px-16 lg:px-24 xl:px-32">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
        {/* Section indicator — desktop only */}
        <div className="hidden md:flex md:col-span-2 flex-col justify-start select-none">
          <span
            className="font-display font-bold leading-none"
            style={{
              fontSize: "clamp(6rem, 12vw, 10rem)",
              color: "var(--color-muted)",
            }}
          >
            01
          </span>
          <span
            className="font-body text-xs uppercase tracking-[0.3em] mt-1"
            style={{ color: "var(--color-muted)" }}
          >
            About
          </span>
        </div>

        {/* Content */}
        <div className="col-span-1 md:col-span-3 flex flex-col sm:flex-row gap-6 items-start">
          <div className="flex flex-col">
            <h2
              className="font-display italic font-bold leading-tight"
              style={{
                fontSize: "clamp(1.4rem, 2.5vw, 2.8rem)",
                color: "var(--color-text-primary)",
              }}
            >
              Dominique Eclavia
              <span
                className="font-body not-italic font-normal text-xs ml-2 align-middle"
                style={{ color: "var(--color-muted)" }}
              >
                he/him
              </span>
            </h2>
            <p
              className="font-body text-sm lg:text-base xl:text-lg mt-3 leading-relaxed"
              style={{ color: "var(--color-text-primary)", maxWidth: "32ch" }}
            >
              Web developer with 2 years+ of experience building dynamic and
              responsive websites using ReactJS and NextJS. Strong foundation in
              front-end development with a passion for creating user-friendly,
              efficient, and scalable web applications.
            </p>
            <div className="ruled-line my-4" />
            <div className="flex gap-6">
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
          </div>
        </div>
      </div>
    </div>
  );
}
