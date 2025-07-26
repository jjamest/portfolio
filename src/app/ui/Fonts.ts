import localFont from "next/font/local";

export const sfPro = localFont({
  src: [
    {
      path: "../../../public/fonts/sf-pro/SF-Pro.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/sf-pro/SF-Pro-Italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-sf-pro",
});
