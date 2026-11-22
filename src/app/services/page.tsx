import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "服務項目",
  description: "PMIS、圖面分析、綠建築與智慧建築、ESG 與 GIS 五項服務。",
};

export default function ServicesPage() {
  return (
    <section className="section">
      <p className="kicker">服務項目</p>
      <h1>五項服務</h1>
      <p className="lede">從土地、圖面、工程，接到指標與資產數字。</p>
      <div className="svc-cards">
        {services.map((service) => (
          <Link key={service.slug} className="svc-card" href={`/services/${service.slug}`}>
            <div className="svc-card-media">
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                sizes="(max-width: 900px) 100vw, 33vw"
              />
              <span className="svc-card-index">{service.index}</span>
            </div>
            <div className="svc-card-body">
              <h3>{service.title}</h3>
              <p>{service.summary}</p>
              <span className="svc-card-go">進入服務</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
