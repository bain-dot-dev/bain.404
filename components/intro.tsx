export default function Section1() {
  return (
    <section className="min-h-screen flex flex-col relative">
      <main className="flex-1 px-12 py-24">
        <div className="max-w-5xl">
          <p className="text-customColors-bloodRed mb-6 font-mono">
            Hi, my name is
          </p>
          <h1 className="text-8xl text-customColors-darkGray font-bold mb-2">
            Bain Hansly Cruz.
          </h1>
          <h2 className="text-6xl text-customColors-gray font-bold text-muted-foreground mb-6">
            I engineer seamless web experiences.
          </h2>
          <p className="text-2xl text-customColors-gray leading-relaxed w-5/6">
            I&apos;m a software developer specializing in developing systems and
            websites. Passionate about software engineering and web development,
            I strive to create user-friendly solutions that make an impact.
          </p>
        </div>
      </main>
    </section>
  );
}
