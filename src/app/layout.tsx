import type { Metadata } from "next";
import { Noto_Sans_TC, Sora } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { company } from "@/lib/site";
import "./globals.css";

const sans = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
});

const display = Sora({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: {
    default: `${company.nameZh}｜${company.tagline}`,
    template: `%s｜${company.nameZh}`,
  },
  description: `${company.nameZh}為${company.group}旗下公司，支援土地開發、財務估價、工程管理、建築設計、ESG 永續與國土智慧應用研發。`,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="zh-Hant" className={`${sans.variable} ${display.variable}`}>
      <body>
        <div className="shell">
          <Header />
        </div>
        <main>{children}</main>
        <div className="shell">
          <Footer />
        </div>
      </body>
    </html>
  );
}
