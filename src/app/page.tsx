import Image from "next/image";
import Link from "next/link";
import MediaLightbox from "@/components/MediaLightbox";
import PptFlow from "@/components/PptFlow";
import { serviceIcons } from "@/components/PptIcons";
import ServiceOrbit from "@/components/ServiceOrbit";
import { company, mediaMotion, serviceShortLabels, services } from "@/lib/site";

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
            <h1>不動產開發與永續管理的應用系統</h1>
            <p className="lede">
              從地政資料介接、平面圖說辨識、工程履約管理，到綠建築標章與企業 ESG 揭露，以自行開發的系統處理不動產開發各階段的資料工作，每個數字都能回溯來源。
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/services">
                五大系統應用
              </Link>
              <Link className="btn btn-ghost" href="/contact">
                預約系統展示
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
                {company.relation}。應用系統涵蓋不動產開發的五個工作面向：以 API
                介接地政謄本、地價與都市計畫等政府資料；由平面圖說產出面積清冊、BIM
                數量與蘊含碳；管理工程履約的公文、查核與估驗；試算綠建築、能效與低碳等標章指標；整理企業
                ESG 揭露與資產評價。可依需求單點導入，也能共用同一份案件資料逐步串接。
              </p>
            </div>
          </div>
          <PptFlow
            compact
            aria-label="五大系統應用概覽"
            className="intro-ppt"
            items={services.map((service) => ({
              title: serviceShortLabels[service.slug] ?? service.title,
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
