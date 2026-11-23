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
        <h1>為開發案與企業永續準備的應用服務</h1>
        <p className="lede">
          從工程督導、圖面與標章，到 ESG
          揭露與資產評價——我們用系統把分散資料收成您願意拿去開會、融資與對外說明的依據。
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
                <span className="svc-card-go">了解如何幫到您</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="cta-panel cta-panel-spaced">
          <div>
            <p className="kicker">不確定從哪裡開始？</p>
            <h2>告訴我們您手上的案件階段</h2>
            <p>
              無論是送審前的標章缺口、年度 ESG 揭露，或是資產評價需要更完整的永續論述，我們都能協助評估適合的模組。
            </p>
          </div>
          <Link className="btn btn-primary" href="/contact">
            聯絡我們
          </Link>
        </div>
      </div>
    </section>
  );
}
