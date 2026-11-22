import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getService, services } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.summary,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <section className="section service-detail">
      <p className="kicker">服務 {service.index}</p>
      <h1>{service.title}</h1>
      <p className="lede">{service.lead}</p>

      <div className="module-grid">
        {service.modules.map((module) => (
          <article key={module.title}>
            <h2>{module.title}</h2>
            <p>{module.text}</p>
          </article>
        ))}
      </div>

      <div className="deliver">
        <div>
          <h2>交付</h2>
          <ul>
            {service.deliverables.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2>邊界</h2>
          <p>{service.boundary}</p>
          <Link className="btn btn-primary" href="/contact">
            討論這個服務
          </Link>
        </div>
      </div>
    </section>
  );
}
