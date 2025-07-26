import type { Metadata } from "next";
import { sfPro } from "./ui/Fonts";
import Footer from "./ui/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "James Tan's Portfolio",
  icons: {
    icon: "/icon/circle.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sfPro.variable} antialiased min-h-screen flex flex-col`}
      >
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
