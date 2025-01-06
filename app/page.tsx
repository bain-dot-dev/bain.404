import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Section1 from "@/components/section1";
import Section2 from "@/components/section2";
import Section3 from "@/components/section3";

export default function Page() {
  return (
    <div className="min-h-screen bg-customColors-pastelWhite dark:bg-customColors-woodSmoke">
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </div>
  );
}
