import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "聯絡我們",
  description: "歡迎來電或來信，我們將儘速與您聯繫。",
};

export default function ContactPage() {
  return (
    <section className="section">
      <div className="shell contact">
        <div>
          <p className="kicker">聯絡我們</p>
          <h1>歡迎來電或來信</h1>
          <p className="lede">一般業務與土地開發案件諮詢，歡迎透過電話或 Email 與我們聯繫。</p>
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
