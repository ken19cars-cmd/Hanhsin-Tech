import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "服務項目",
  description: "PMIS、建築規劃設計、綠建築與智慧建築、ESG 與 GIS 五項專業服務。",
};

export default function ServicesPage() {
  return (
    <section className="section">
      <p className="kicker">服務項目</p>
      <h1>專業服務</h1>
      <p className="lede">
        營建工程管理、建築規劃設計、綠建築標章、企業 ESG 與 GIS 地理資訊加值。
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
    </section>
  );
}
