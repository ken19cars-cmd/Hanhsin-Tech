import type { Metadata } from "next";
import { Noto_Sans_TC, Newsreader } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const sans = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
});

const display = Newsreader({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: {
    default: "翰欣科技｜不動產開發 × 創新應用",
    template: "%s｜翰欣科技",
  },
  description:
    "翰欣科技協助土地開發團隊處理工程管理、設計圖分析、綠建築與智慧建築檢核、企業 ESG，以及 GIS 地政加值。",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="zh-Hant" className={`${sans.variable} ${display.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
