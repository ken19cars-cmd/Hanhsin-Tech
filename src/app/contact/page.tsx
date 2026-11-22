import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "聯絡",
  description: "說明基地、階段與需要的服務線。",
};

export default function ContactPage() {
  return (
    <section className="section contact">
      <div>
        <p className="kicker">聯絡</p>
        <h1>說明你的基地</h1>
        <p className="lede">告訴我們地點、目前階段，以及五條服務線裡最急的一條。</p>
      </div>
      <ContactForm />
    </section>
  );
}
