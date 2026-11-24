import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "聯絡我們",
  description: "預約了解應用系統如何協助不動產分析、策略整理與資產評鑑準備。",
};

export default function ContactPage() {
  return (
    <section className="section">
      <div className="shell contact">
        <div>
          <p className="kicker">聯絡我們</p>
          <h1>歡迎來電或來信</h1>
          <p className="lede">
            工程管理、圖面與標章資料、ESG 與資產評價，或 GIS 查詢，歡迎說明案件階段，我們會回覆適合的系統範圍。
          </p>
          <ul className="contact-facts">
            <li>
              <span>地址</span>
              <strong>{company.address}</strong>
            </li>
            <li>
              <span>電話</span>
              <strong>
                <a href={`tel:${company.phoneTel}`}>{company.phoneDisplay}</a>
              </strong>
            </li>
            <li>
              <span>Email</span>
              <strong>
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </strong>
            </li>
          </ul>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
