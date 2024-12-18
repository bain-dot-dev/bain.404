// import Image from "next/image"

import Image from "next/image";

export default function Section2() {
  return (
    <section className="min-h-screen flex flex-col px-12 py-24">
      <div className="flex items-start gap-12">
        <div className="flex-1 space-y-8">
          <div className="flex items-center gap-4">
            <h2 className="text-4xl font-semibold text-customColors-darkGray">
              <span className="text-2xl text-customColors-bloodRed font-mono">
                01.
              </span>{" "}
              About me
            </h2>
            <div className="h-[1px] flex-1 bg-border"></div>
          </div>

          <div className="space-y-6 text-customColors-gray">
            <p className="text-xl leading-relaxed">
              Hello! My name is Bain Hansly Cruz, and I enjoy solving problems
              and turning ideas into solutions. My interest in freelancing
              started in 2023 when I was reached out to develop a web-based
              system for a rice mill owner in my hometown. This experience not
              only honed my technical skills but also fueled my passion for
              creating software that meets real-world needs.
            </p>
            <p className="text-xl leading-relaxed">
              My main focus these days is building accessible, inclusive
              products and digital experiences for a variety of clients. I
              believe in the power of technology to bridge gaps, simplify
              processes, and make a meaningful impact on people&apos;s lives.
            </p>
          </div>

          <div className="space-y-2 text-xl text-muted-foreground">
            <p>
              Here are a few technologies I&apos;ve been working with recently:
            </p>
            <div className="grid grid-cols-2 gap-2">
              {[
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "Prisma ORM",
                "Zod",
              ].map((tech) => (
                <div key={tech} className="flex items-center gap-2">
                  <span className="text-customColors-bloodRed">▶</span>
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative w-80 h-80 mt-20">
          <Image
            src="/bain/Cruz, Bain Hansly.png"
            alt="3R Shane IMS Preview"
            fill
            className="object-cover"
          />
          {/* <div className="absolute inset-4 border border-red-500"></div>
          <div className="absolute inset-0 bg-muted"></div> */}
        </div>
      </div>
    </section>
  );
}
