import type { Metadata } from "next";
import { Space_Grotesk, Bowlby_One, Yatra_One, Bebas_Neue } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
});

const bowlbyOne = Bowlby_One({
  variable: "--font-display-latin",
  weight: "400",
  subsets: ["latin"],
});

const yatraOne = Yatra_One({
  variable: "--font-display-devanagari",
  weight: "400",
  subsets: ["devanagari", "latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-sticker",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Connaught Place (Pune) - Sab raste CP se jaate hain",
  description: "Pune ko survive mat karo. Jeeyo. A Gen-Z city exploration platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${bowlbyOne.variable} ${yatraOne.variable} ${bebasNeue.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
