"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="form-done" role="status">
        <h2>已收到您的訊息</h2>
        <p>這是前端示意表單。正式聯繫請直接來電或來信，我們將儘速回覆。</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <label>
        姓名／單位
        <input name="name" required autoComplete="name" />
      </label>
      <label>
        Email
        <input name="email" type="email" required autoComplete="email" />
      </label>
      <label>
        電話
        <input name="phone" type="tel" autoComplete="tel" />
      </label>
      <label>
        諮詢內容
        <textarea
          name="message"
          rows={6}
          required
          placeholder="請簡述基地位置、目前階段與需要協助的方向"
        />
      </label>
      <button className="btn btn-primary" type="submit">
        送出訊息
      </button>
    </form>
  );
}
