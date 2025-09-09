import "./globals.css";
import localFont from "next/font/local";
import { Arapey } from "next/font/google";

// Google font (testo base)
const arapey = Arapey({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
});

// Local fonts
const tanHarmony = localFont({
  src: "../public/fonts/Harmony.woff2",
  variable: "--font-display",
  display: "swap",
});

const beautifullyDelicious = localFont({
  src: "../public/fonts/Beautifully-Delicious-Script.woff2",
  variable: "--font-script",
  display: "swap",
});

export const metadata = {
  title: "Merisio Gianluigi | Coach Strategico e Formatore",
  description: "Formazione e coaching per professionisti del benessere.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="it"
      className={`${arapey.variable} ${tanHarmony.variable} ${beautifullyDelicious.variable}`}
    >
      <body className="bg-brand-white text-brand-black font-serif overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
