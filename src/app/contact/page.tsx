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
          <h1>一起評估最適合您的啟動方式</h1>
          <p className="lede">
            無論是標章準備、ESG 揭露、資產評價或工程督導，歡迎留下需求。我們會依您的案件階段回覆，說明系統與顧問能如何協助。
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
