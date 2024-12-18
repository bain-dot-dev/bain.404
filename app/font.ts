import localFont from "next/font/local";

export const calibre = localFont({
  src: [
    {
      path: "../public/fonts/Calibre-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Calibre-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Calibre-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-calibre",
});

export const sfMono = localFont({
  src: [
    {
      path: "../public/fonts/SFMono-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/SFMono-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-sf-mono",
});
