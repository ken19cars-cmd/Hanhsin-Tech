type Item = { title: string; text: string };

type Props = {
  items: Item[];
};

export default function ValueFlow({ items }: Props) {
  return (
    <div className="value-flow" aria-label="工作理念">
      {items.map((item, index) => (
        <article key={item.title} className="value-flow-item">
          <div className="value-flow-marker">
            <span>{String(index + 1).padStart(2, "0")}</span>
            {index < items.length - 1 ? <i aria-hidden="true" /> : null}
          </div>
          <div className="value-flow-copy">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
