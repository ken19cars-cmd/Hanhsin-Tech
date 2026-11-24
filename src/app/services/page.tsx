import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "服務項目",
  description:
    "PMIS、建築規劃設計、綠建築標章、企業 ESG 與資產評價、GIS 加值——協助您分析、決策並提升評鑑說服力。",
};

export default function ServicesPage() {
  return (
    <section className="section">
      <div className="shell">
        <p className="kicker">服務項目</p>
        <h1>五大系統應用</h1>
        <p className="lede">
          營建工程管理、建築圖面分析、綠建築與智慧建築指標、企業 ESG
          與資產評價、GIS 地理資訊加值。以下為現行說明，細部項目可依案件再調整。
        </p>
        <div className="svc-cards">
          {services.map((service) => (
            <Link key={service.slug} className="svc-card" href={`/services/${service.slug}`}>
              <div className="svc-card-media">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                  unoptimized={
                    service.image.endsWith(".svg") || service.image.endsWith(".png")
                  }
                />
              </div>
              <div className="svc-card-body">
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
                <span className="svc-card-go">了解更多</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="cta-panel cta-panel-spaced">
          <div>
            <p className="kicker">聯絡我們</p>
            <h2>有需求，歡迎與我們聯繫</h2>
            <p>
              標章資料整理、ESG 揭露、工程督導或基地查詢，只要有需要，歡迎來電或來信。
            </p>
          </div>
          <Link className="btn btn-primary" href="/contact">
            立即聯絡
          </Link>
        </div>
      </div>
    </section>
  );
}
