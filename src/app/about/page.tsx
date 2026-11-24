import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { advantages, company, focusAreas } from "@/lib/site";

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
      <section className="section">
        <div className="shell page-hero">
          <div className="page-hero-copy">
            <p className="kicker">關於我們</p>
            <h1>{company.nameZh}</h1>
            <p className="lede">
              專業、負責、效率、誠懇——以應用系統協助您看清案況、整理策略，並把可追溯的結果用於資產評鑑與對外溝通。
            </p>
            <p className="lede muted">
              {company.nameEn}
              <br />
              {company.group}
              {company.relation}
            </p>
          </div>
          <div className="page-hero-media">
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

      <section className="section">
        <div className="shell">
          <div className="section-head left">
            <p className="kicker">公司定位</p>
            <h2>
              {company.group}
              {company.relation}
            </h2>
          </div>
          <div className="prose-block">
            <p>
              {company.nameZh}為{company.group}
              {company.relation}
              ，承接不動產開發顧問領域的長期經驗，進一步聚焦「應用研發」與「資訊整合」：把土地、財務、估價、工程、設計與永續所需要的資料，整理成可追溯、可共用、可決策的工作底圖。
            </p>
            <p>
              開發案件常同時牽涉地政法規、基地條件、設計圖說、工地進度、認證準備、財務模型與永續揭露。當資料分散在各專業單位，變更與假設容易對不齊；翰欣以系統化方式，協助把關鍵事實整理成可共用、可追溯的工作底圖。
            </p>
            <p>
              面對公共建設、都市更新、土地開發與企業永續需求日增，我們針對土地開發、財務、估價、工程管理、建築設計、ESG
              永續、國土智慧等領域，持續支援應用研發與資料加值，讓決策者看得懂現況、說得出差異、推得動下一階段。
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell band soft">
          <div className="section-head left">
            <p className="kicker">核心領域</p>
            <h2>核心業務領域</h2>
          </div>
          <div className="focus-grid">
            {focusAreas.map((item, index) => (
              <article key={item.title}>
                <span>0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-head left">
            <p className="kicker">工作理念</p>
            <h2>專業、負責、效率、誠懇</h2>
            <p className="section-desc">
              以穩健態度協助您推進開發與永續準備——交付可開會、可融資說明、可稽核追蹤的工作底稿。
            </p>
          </div>
          <div className="value-grid">
            {values.map((value) => (
              <article key={value.title}>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-head left">
            <p className="kicker">系統優勢</p>
            <h2>為什麼客戶選擇與我們合作</h2>
            <p className="section-desc">
              透過應用系統協助不動產分析、策略整理與資產評鑑準備，讓科技直接服務決策與對外溝通。
            </p>
          </div>
          <div className="advantage-grid">
            {advantages.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="about-note">
            <div>
              <h2>想評估是否適合您的案件？</h2>
              <p>
                我們不取代建築師、專業技師、估價師或會計師的簽證，也不核發各類標章。我們交付的是可追溯的清單、差異、假設與底圖，讓法定專業與評定機構在正確的事實上工作。歡迎先討論您手上的開發或永續需求。
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
