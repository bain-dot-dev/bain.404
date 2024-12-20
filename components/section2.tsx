import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Section2() {
  return (
    <section className="h-1/2 flex items-center justify-center px-12 py-24">
      <div className="w-full max-w-5xl space-y-12">
        {/* Section Header */}
        <div className="flex items-center gap-4">
          <h2 className="text-4xl font-semibold">
            <span className="text-2xl text-customColors-bloodRed font-mono">
              02.
            </span>{" "}
            Project
          </h2>
          <div className="h-[1px] flex-1 bg-border"></div>
        </div>

        {/* Project Content */}
        <div className="relative grid grid-cols-12 gap-4">
          {/* Image Section */}
          <div className="col-span-7 relative">
            <div className="relative aspect-video w-full">
              <div className="absolute inset-0 bg-muted/80 z-10"></div>
              <Image
                src="/placeholder.svg"
                alt="3R Shane IMS Preview"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="col-span-5 flex flex-col items-end gap-4">
            <p className="text-customColors-bloodRed text-md font-mono">
              Featured Project
            </p>
            <h3 className="text-4xl font-semibold">3R Shane IMS</h3>
            <div className="bg-muted/20 p-6 text-right">
              <p className="text-lg text-muted-foreground">
                An inventory management system with point-of-sale, and purchase
                order (procurement of goods) for rice mill businesses.
              </p>
            </div>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
                aria-label="View source code on GitHub"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
                aria-label="Visit live site"
              >
                <ExternalLink className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
