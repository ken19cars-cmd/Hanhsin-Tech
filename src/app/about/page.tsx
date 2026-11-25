import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AdvantageStack from "@/components/AdvantageStack";
import DomainMap from "@/components/DomainMap";
import { advantages, company } from "@/lib/site";

export const metadata: Metadata = {
  title: "關於我們",
  description: `${company.nameZh}為${company.group}${company.relation}，針對土地開發、財務估價、工程管理、建築設計、ESG 永續與國土智慧提供應用研發支援。`,
};

export default function AboutPage() {
  return (
    <>
      <section className="section about-page">
        <div className="shell page-hero">
          <div className="page-hero-copy">
            <p className="kicker">關於我們</p>
            <h1>{company.nameZh}</h1>
            <p className="lede">
              以自行開發的應用系統，處理不動產開發從土地調查、設計、施工到永續揭露各階段的資料工作。
            </p>
            <p className="lede muted">
              {company.nameEn}
              <br />
              {company.group}
              {company.relation}
            </p>
          </div>
          <div className="page-hero-media tech-frame">
            <Image
              src="/about-cover.jpg"
              alt="土地開發與資訊科技整合概念圖"
              fill
              sizes="(max-width: 900px) 100vw, 48vw"
              priority
            />
          </div>
        </div>
      </section>

      <section id="position" className="section about-page">
        <div className="shell about-block">
          <div className="section-head">
            <p className="kicker">公司定位</p>
            <h2>
              {company.group}
              {company.relation}
            </h2>
          </div>
          <div className="prose-block about-prose">
            <p>
              {company.nameZh}為{company.group}
              {company.relation}。皓欣長期從事不動產開發規劃顧問，翰欣則把顧問實務中反覆出現的資料工作轉成應用系統：介接政府地政與地理資料、解析建築圖說、管理工程履約，並整理標章與
              ESG 所需的數據與文件。
            </p>
            <p>
              系統的欄位、流程與報表，都依土地開發、都市更新、公共工程與永續揭露的實際作業訂定；每一筆資料保留來源、時間與版次，讓業主、主辦機關與合作單位在同一份資料上討論與查核。
            </p>
          </div>
        </div>
      </section>

      <section id="domains" className="section about-page">
        <div className="shell">
          <div className="section-head">
            <p className="kicker">核心領域</p>
            <h2>以系統應用串起六大專業領域</h2>
            <p className="section-desc">
              每個領域都對應到具體的系統模組，可以單獨導入，也能共用同一份案件資料。
            </p>
          </div>
          <DomainMap />
        </div>
      </section>

      <section id="advantages" className="section about-page">
        <div className="shell about-block">
          <div className="section-head">
            <p className="kicker">系統優勢</p>
            <h2>為什麼選擇與我們合作</h2>
          </div>
          <AdvantageStack items={advantages} />
        </div>
      </section>

      <section className="section about-page">
        <div className="shell">
          <div className="about-note">
            <div>
              <h2>有需求，歡迎與我們聯繫</h2>
              <p>
                我們不取代建築師、專業技師、估價師或會計師的簽證，也不核發各類標章。我們交付可追溯的清單、差異、假設與底圖。
              </p>
            </div>
            <Link className="btn btn-primary" href="/contact">
              聯絡我們
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
