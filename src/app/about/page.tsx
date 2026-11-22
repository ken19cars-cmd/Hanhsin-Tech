import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "關於",
  description: "翰欣科技實業有限公司處理不動產開發中的圖面、工程、地政與永續資訊。",
};

const ways = [
  { title: "盤點", text: "先確認基地、圖說、契約與既有標章版本，標出缺的那一層資料。" },
  { title: "底圖", text: "地政、設計物件與工程主檔用同一組編號，後面的數字才回得去。" },
  { title: "並行", text: "指標證據和成本、碳排一起整理，避免報告書和工地各算各的。" },
  { title: "交付", text: "交出可追溯的清單、差異與假設。簽證與正式評定留給法定專業。" },
];

export default function AboutPage() {
  return (
    <section className="section about">
      <p className="kicker">公司</p>
      <h1>翰欣科技實業有限公司</h1>
      <p className="lede">
        我們做開發流程中間那一層資訊。上游是土地、法規與設計圖，下游是工地進度、認證分數、財務與永續揭露。
      </p>
      <div className="ways">
        {ways.map((way, index) => (
          <article key={way.title}>
            <span>0{index + 1}</span>
            <h2>{way.title}</h2>
            <p>{way.text}</p>
          </article>
        ))}
      </div>
      <div className="about-note">
        <h2>不做的事</h2>
        <p>
          不取代建築師、專業技師、不動產估價師、會計師的簽證，也不核發綠建築、智慧建築、能效、LEED 或 WELL。地政個人資料只在授權範圍內處理。
        </p>
        <Link className="btn btn-primary" href="/contact">
          說明你的基地
        </Link>
      </div>
    </section>
  );
}
