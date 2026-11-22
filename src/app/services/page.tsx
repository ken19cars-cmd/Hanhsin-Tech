import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "服務",
  description: "PMIS、圖面分析、綠建築與智慧建築、ESG 與 GIS 五項服務。",
};

export default function ServicesPage() {
  return (
    <section className="section">
      <p className="kicker">服務</p>
      <h1>五項服務</h1>
      <p className="lede">從土地、圖面、工程，接到指標與資產數字。</p>
      <div className="svc-list">
        {services.map((service) => (
          <Link key={service.slug} className="svc-row" href={`/services/${service.slug}`}>
            <span className="idx">{service.index}</span>
            <span className="name">{service.title}</span>
            <span className="desc">{service.summary}</span>
            <span className="go">進入</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
