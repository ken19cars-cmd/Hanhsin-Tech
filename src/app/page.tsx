import Image from "next/image";
import Link from "next/link";
import MediaLightbox from "@/components/MediaLightbox";
import PptFlow from "@/components/PptFlow";
import { serviceIcons } from "@/components/PptIcons";
import ServiceOrbit from "@/components/ServiceOrbit";
import { company, mediaMotion, services } from "@/lib/site";

const overviewLabels: Record<string, string> = {
  pmis: "PMIS 工程管理",
  drawings: "平面圖說辨識",
  green: "標章指標評估",
  esg: "ESG／資產評價",
  gis: "GIS 地理加值",
};

export default function HomePage() {
  return (
    <>
      <section className="hero hero-home">
        <div className="hero-media" aria-hidden="true">
          <Image
            src="/hero.jpg"
            alt=""
            fill
            priority
            className="hero-img"
            sizes="100vw"
          />
          <div className="hero-veil" />
          <div className="hero-grid" aria-hidden="true" />
        </div>
        <div className="shell hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">{company.nameZh}</p>
            <h1>土地開發與永續管理的系統應用</h1>
            <p className="lede">
              以應用系統串接工程進度、圖面與標章、企業 ESG 與資產資訊，以及地理條件查詢，讓案件團隊共用同一套可追蹤資料。
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/services">
                五大服務
              </Link>
              <Link className="btn btn-ghost" href="/contact">
                聯絡我們
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="intro-block intro-block-wide">
            <p className="kicker">關於翰欣</p>
            <h2>系統可延伸的應用領域</h2>
            <div className="prose-block">
              <p>
                {company.nameZh}（{company.nameEn}）為{company.group}
                {company.relation}。應用系統可依案件需求延伸至：土地開發與地政條件、營建工程管理、平面圖說與
                BIM、綠建築／智慧建築指標、企業 ESG 與資產評價，以及 GIS
                招商與基地查詢等領域，可單點導入，也可逐步串接。
              </p>
            </div>
          </div>
          <PptFlow
            compact
            aria-label="五大系統應用概覽"
            className="intro-ppt"
            items={services.map((service) => ({
              title: overviewLabels[service.slug] ?? service.title,
              icon: serviceIcons[service.slug] ?? "modules",
              href: `/services/${service.slug}`,
            }))}
          />
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-head left">
            <p className="kicker">服務項目</p>
            <h2>五大系統應用</h2>
            <p className="section-desc">依需求單點導入，也可逐步串接成完整流程。</p>
          </div>
          <ServiceOrbit />
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-head left">
            <p className="kicker">畫面預覽</p>
            <h2>實際介面參考</h2>
          </div>
          <MediaLightbox
            className="home-preview-grid"
            items={services.slice(0, 3).map((service) => ({
              src: service.image,
              alt: service.imageAlt,
              caption: `${service.title}｜${service.summary}`,
              motion: mediaMotion(service.image),
            }))}
          />
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="cta-panel cta-panel-tech">
            <div>
              <p className="kicker">聯絡我們</p>
              <h2>有需求，歡迎與我們聯繫</h2>
              <p>
                工程管理、標章資料、ESG 揭露、資產評價或基地查詢，歡迎來電或來信。
              </p>
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
