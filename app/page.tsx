import Footer from "@/components/footer";
import Section1 from "@/components/hero";
import Section2 from "@/components/section1";
import Section3 from "@/components/section2";
import Section4 from "@/components/section3";

export default function Page() {
  return (
    <div className="min-h-screen bg-customColors-pastelWhite">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </div>
  );
}
