export default function Hero() {
  return (
    <div className="relative h-svh w-full flex flex-col justify-center px-8 md:px-16 lg:px-24 xl:px-32">
      <div>
        <h1
          className="font-display italic font-bold leading-[0.85] tracking-tight"
          style={{
            fontSize: "clamp(3.5rem, 9vw, 8.5rem)",
            color: "var(--color-text-primary)",
          }}
        >
          <span className="block">Dominique</span>
          <span className="block">Eclavia</span>
        </h1>
        <div className="ruled-line--accent mt-6 mb-5" />
        <p
          className="font-body uppercase tracking-[0.3em] text-sm"
          style={{ color: "var(--color-text-primary)" }}
        >
          Full-Stack Web Developer
        </p>
      </div>
      <p
        className="absolute bottom-10 left-8 md:left-16 lg:left-24 xl:left-32 font-body text-xs uppercase tracking-widest"
        style={{ color: "var(--color-muted)" }}
      >
        Pasig, NCR, Philippines
      </p>
    </div>
  );
}
