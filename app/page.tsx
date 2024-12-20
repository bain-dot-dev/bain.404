import Section1 from "@/components/hero";
import Section2 from "@/components/section1";
import Section3 from "@/components/section2";
import Section4 from "@/components/section3";

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* <div className="relative max-w-6xl mx-auto"> */}
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />

      <footer className="flex flex-col items-center justify-center gap-4 py-8 text-center">
        <p className="text-muted-foreground">
          Loosely designed in Figma and coded in Visual Studio Code by yours
          truly.
        </p>
        <p className="text-muted-foreground">
          Built with Next.js and Tailwind CSS.
        </p>
      </footer>
      {/* </div> */}
    </div>
  );
}
