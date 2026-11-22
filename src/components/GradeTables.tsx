import { energyLevels, leedGrades, smartGrades } from "@/lib/site";

export default function GradeTables() {
  return (
    <div className="grade-grid">
      <section>
        <h3>建築能效</h3>
        <ul>
          {energyLevels.map((level) => (
            <li key={level.id}>
              <strong>{level.label}</strong>
              {level.detail ? <span>{level.detail}</span> : null}
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h3>智慧建築等級</h3>
        <ul>
          {smartGrades.map((item) => (
            <li key={item.grade}>
              <strong>{item.grade}</strong>
              <span>{item.score}</span>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h3>LEED</h3>
        <ul>
          {leedGrades.map((item) => (
            <li key={item.grade}>
              <strong>{item.grade}</strong>
              <span>{item.score}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
