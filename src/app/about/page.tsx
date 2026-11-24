import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AdvantageStack from "@/components/AdvantageStack";
import DomainMap from "@/components/DomainMap";
import ValueFlow from "@/components/ValueFlow";
import { advantages, company } from "@/lib/site";

export const metadata: Metadata = {
  title: "關於我們",
  description: `${company.nameZh}為${company.group}${company.relation}，針對土地開發、財務估價、工程管理、建築設計、ESG 永續與國土智慧提供應用研發支援。`,
};

const values = [
  {
    title: "專業",
    text: "以不動產開發與資訊整合經驗，把土地、圖面、工程與永續指標落到可執行的工作底稿。",
  },
  {
    title: "負責",
    text: "從盤點、建檔到交付，數字與證據都留得出處，對案件品質與資料軌跡負責。",
  },
  {
    title: "效率",
    text: "掌握開發時程與關鍵節點，讓主辦單位、投資人與專業團隊更快對齊同一組事實。",
  },
  {
    title: "誠懇",
    text: "清楚說明能做與不能做的邊界；簽證、評定與法定責任仍留給法定專業與主管機關。",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="section about-page">
        <div className="shell page-hero">
          <div className="page-hero-copy">
            <p className="kicker">關於我們</p>
            <h1>{company.nameZh}</h1>
            <p className="lede">
              以系統把土地、工程與永續資料串成可追蹤的工作底圖，協助決策與對外說明。
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

      <section className="section about-page">
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
              {company.relation}
              ，承接不動產開發顧問領域的長期經驗，聚焦應用研發與資訊整合：把土地、財務、估價、工程、設計與永續所需資料，整理成可追溯、可共用、可決策的工作底圖。
            </p>
          </div>
        </div>
      </section>

      <section className="section about-page">
        <div className="shell">
          <div className="section-head">
            <p className="kicker">核心領域</p>
            <h2>以系統應用串起六大專業領域</h2>
            <p className="section-desc">
              土地、財務、工程、設計、ESG 與國土資訊，透過同一套系統底圖互相對齊。
            </p>
          </div>
          <DomainMap />
        </div>
      </section>

      <section className="section about-page">
        <div className="shell about-block">
          <div className="section-head">
            <p className="kicker">工作理念</p>
            <h2>專業、負責、效率、誠懇</h2>
          </div>
          <ValueFlow items={values} />
        </div>
      </section>

      <section className="section about-page">
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
