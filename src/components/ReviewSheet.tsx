"use client";

import { useState } from "react";
import { reviewGroups } from "@/lib/site";
import GradeTables from "./GradeTables";

export default function ReviewSheet() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  function toggle(id: string) {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  const total = reviewGroups.reduce((sum, group) => sum + group.items.length, 0);
  const done = Object.values(checked).filter(Boolean).length;

  return (
    <div className="review">
      <div className="review-summary">
        <p>
          已勾選 <strong>{done}</strong> / {total}
        </p>
        <p className="muted">這是送審前工作底稿，正式分數仍由評定機構核定。</p>
      </div>
      {reviewGroups.map((group) => (
        <section key={group.id} className="review-group">
          <header>
            <h2>{group.title}</h2>
            <p>{group.source}</p>
          </header>
          <ul>
            {group.items.map((item) => (
              <li key={item.id}>
                <label>
                  <input
                    type="checkbox"
                    checked={Boolean(checked[item.id])}
                    onChange={() => toggle(item.id)}
                  />
                  <span>
                    {item.label}
                    {item.note ? <em>{item.note}</em> : null}
                  </span>
                </label>
              </li>
            ))}
          </ul>
        </section>
      ))}
      <GradeTables />
    </div>
  );
}
