type Item = { title: string; text: string };

type Props = {
  items: Item[];
};

export default function AdvantageStack({ items }: Props) {
  return (
    <div className="advantage-stack">
      {items.map((item, index) => (
        <article key={item.title} className="advantage-stack-item">
          <span className="advantage-stack-num">{String(index + 1).padStart(2, "0")}</span>
          <div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
