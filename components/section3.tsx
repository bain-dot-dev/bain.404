import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Section4() {
  return (
    <section className="min-h-screen flex flex-col px-12 py-24">
      <div className="flex-1 flex flex-col items-center justify-center max-w-3xl mx-auto text-center">
        <p className="text-customColors-bloodRed text-3xl mb-4 font-mono">
          03. What&apos;s Next?
        </p>
        <h2 className="text-8xl font-bold mb-6">Get In Touch</h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-xl">
          I&apos;m currently open to new opportunities, and my inbox is always
          open. Whether you have a question or just want to say hello, feel free
          to reach out, and I&apos;ll do my best to get back to you!
        </p>
        <Button
          variant="outline"
          className="border-customColors-bloodRed text-customColors-bloodRed hover:bg-customColors-bloodRed/85 hover:text-white px-8"
          asChild
        >
          <Link href="mailto:cruzbanhansly@gmail.com">Say Hello</Link>
        </Button>
      </div>
    </section>
  );
}
