import type { Metadata } from "next";
import ReviewSheet from "@/components/ReviewSheet";

export const metadata: Metadata = {
  title: "指標檢核表",
  description: "綠建築、智慧建築、LEED、WELL 與低碳的送審前準備清單。",
};

export default function ReviewPage() {
  return (
    <section className="section">
      <p className="kicker">檢核</p>
      <h1>指標檢核表</h1>
      <p className="lede">送審前先對證據與負責人。這裡不取代正式評分。</p>
      <ReviewSheet />
    </section>
  );
}
