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
        <h2>已收到說明</h2>
        <p>這是前端示意表單。正式案件請改用你們實際的收件信箱或 CRM。</p>
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
        基地或案件摘要
        <textarea name="message" rows={6} required placeholder="地點、階段、需要哪一條服務線" />
      </label>
      <button className="btn btn-primary" type="submit">
        送出
      </button>
    </form>
  );
}
