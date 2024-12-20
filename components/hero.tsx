export default function Hero() {
  const one = (
    <h1 className="text-xl text-customColors-bloodRed mb-6 font-mono">
      Hi, my name is
    </h1>
  );

  const two = (
    <h1 className="text-8xl text-customColors-darkGray font-bold mb-2">
      Bain Hansly Cruz.
    </h1>
  );

  const three = (
    <h2 className="text-6xl text-customColors-gray font-bold text-muted-foreground mb-6">
      I engineer seamless web experiences.
    </h2>
  );

  const four = (
    <p className="text-2xl text-customColors-gray leading-relaxed w-5/6">
      I am a skilled IT professional with a specialization in Database Systems
      Technology and Web Development, combining my passion for software
      engineering with a focus on delivering high-quality, efficient, and
      scalable solutions.
    </p>
  );

  const items = [one, two, three, four];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4">
      <main className="flex-1 flex flex-col items-start justify-center text-left px-28 w-1/2 -mt-48">
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      </main>
    </section>
  );
}
