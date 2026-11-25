import type { Metadata } from "next";
import Link from "next/link";
import { FaqList } from "@/components/ServiceSections";
import { serviceShortLabels, services } from "@/lib/site";

export const metadata: Metadata = {
  title: "常見問題",
  description: "PMIS、平面圖說辨識、標章指標、企業 ESG 與 GIS 系統導入前常見的問題。",
};

export default function FaqPage() {
  return (
    <>
      <section className="section">
        <div className="shell">
          <p className="kicker">導入與問答</p>
          <h1>常見問題</h1>
          <p className="lede">
            依系統分類整理導入前最常被問到的問題。找不到答案的話，歡迎直接來電或留言，我們會依您的案件狀況說明。
          </p>
          <nav className="faq-index" aria-label="問題分類">
            {services.map((service) => (
              <a key={service.slug} href={`#${service.slug}`}>
                <span>{service.index}</span>
                {serviceShortLabels[service.slug] ?? service.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {services.map((service) => (
        <section key={service.slug} id={service.slug} className="section svc-sec faq-group">
          <div className="shell">
            <div className="faq-group-head">
              <div>
                <p className="svc-eyebrow">
                  <span className="svc-num">{service.index}</span>
                  <span className="svc-rule" aria-hidden="true" />
                  <span>常見問題</span>
                </p>
                <h2>{service.title}</h2>
              </div>
              <Link className="btn btn-ghost" href={`/services/${service.slug}`}>
                查看系統說明
              </Link>
            </div>
            <FaqList items={service.faq} />
          </div>
        </section>
      ))}

      <section className="section">
        <div className="shell">
          <div className="cta-panel cta-panel-tech">
            <div>
              <p className="kicker">聯絡我們</p>
              <h2>還有其他問題？</h2>
              <p>告訴我們案件類型與目前階段，我們會說明適合的系統模組與導入方式。</p>
            </div>
            <Link className="btn btn-primary" href="/contact">
              立即聯絡
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
