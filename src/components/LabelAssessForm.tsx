"use client";

import { useMemo, useState } from "react";
import { assessmentNote, getAssessment, type AssessField, type AssessValues } from "@/lib/labels/assessments";

const WORDS = { yes: "符合", no: "未符合", na: "不適用" };

function visibleFields(fields: AssessField[], values: AssessValues) {
  return fields.filter((field) => values.mode === "existing" || field.group !== "既有建築電費單");
}

export default function LabelAssessForm({ id }: { id: string }) {
  const spec = getAssessment(id);
  const [values, setValues] = useState<AssessValues>({});
  const fields = useMemo(() => (spec ? visibleFields(spec.fields, values) : []), [spec, values]);
  if (!spec) return null;

  const result = spec.score(values);
  const words = spec.checkWords ?? WORDS;
  const groups: string[] = [];
  for (const field of fields) {
    if (!groups.includes(field.group)) groups.push(field.group);
  }

  function setValue(fieldId: string, value: string) {
    setValues((current) => ({ ...current, [fieldId]: value }));
  }

  function reset() {
    setValues({});
  }

  return (
    <div className="as-layout">
      <form
        className="as-form"
        onSubmit={(event) => event.preventDefault()}
      >
        {groups.map((group) => (
          <fieldset key={group} className="as-group">
            <legend>{group}</legend>
            <div className="as-rows">
              {fields
                .filter((field) => field.group === group)
                .map((field) => (
                  <div key={field.id} className="as-row">
                    <div className="as-label">
                      <span>
                        {field.label}
                        {field.type === "check" && field.basic ? <em>基本</em> : null}
                      </span>
                      {field.type === "number" && field.hint ? <small>{field.hint}</small> : null}
                    </div>
                    {field.type === "number" ? (
                      <label className="as-number">
                        <input
                          inputMode="decimal"
                          type="number"
                          min={field.min}
                          max={field.max}
                          step={field.step ?? 1}
                          value={values[field.id] ?? ""}
                          onChange={(event) => setValue(field.id, event.target.value)}
                        />
                        {field.unit ? <span>{field.unit}</span> : null}
                      </label>
                    ) : null}
                    {field.type === "select" ? (
                      <select value={values[field.id] ?? ""} onChange={(event) => setValue(field.id, event.target.value)}>
                        <option value="">請選擇</option>
                        {field.options.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    ) : null}
                    {field.type === "check" ? (
                      <div className="as-checks" role="radiogroup" aria-label={field.label}>
                        {(["yes", "no", "na"] as const).map((choice) => (
                          <button
                            key={choice}
                            type="button"
                            aria-pressed={values[field.id] === choice}
                            onClick={() => setValue(field.id, values[field.id] === choice ? "" : choice)}
                          >
                            {words[choice]}
                          </button>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ))}
            </div>
          </fieldset>
        ))}
        <button className="as-reset" type="button" onClick={reset}>
          清除這張表
        </button>
      </form>

      <aside className={`as-result is-${result.tone}`} aria-live="polite">
        <p className="as-kicker">試算結果</p>
        <p className="as-grade">{result.grade}</p>
        <p className="as-summary">{result.summary}</p>
        {result.lines.length ? (
          <dl>
            {result.lines.map((line) => (
              <div key={line.label}>
                <dt>{line.label}</dt>
                <dd>{line.value}</dd>
              </div>
            ))}
          </dl>
        ) : null}
        {result.gaps.length ? (
          <ul>
            {result.gaps.map((gap) => (
              <li key={gap}>{gap}</li>
            ))}
          </ul>
        ) : null}
        <p className="as-note">{assessmentNote}</p>
      </aside>
    </div>
  );
}
