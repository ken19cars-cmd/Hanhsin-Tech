import type { Metadata } from "next";
import Image from "next/image";
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
      <div className="service-hero">
        <div>
          <p className="kicker">服務項目</p>
          <h1>{service.title}</h1>
          <p className="lede">{service.lead}</p>
        </div>
        <div className="service-hero-media">
          <Image
            src={service.image}
            alt={service.imageAlt}
            fill
            sizes="(max-width: 900px) 100vw, 46vw"
            priority
            unoptimized={service.image.endsWith(".svg") || service.image.endsWith(".png")}
          />
        </div>
      </div>

      <div className="module-grid">
        {service.modules.map((module) => (
          <article key={module.title}>
            <h2>{module.title}</h2>
            <p>{module.text}</p>
          </article>
        ))}
      </div>

      {service.systems.length > 0 ? (
        <div className="system-gallery">
          <div className="system-grid">
            {service.systems.map((shot) => (
              <figure key={shot.src} className="system-card">
                <div className="system-card-media">
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    sizes="(max-width: 900px) 100vw, 33vw"
                    unoptimized={shot.src.endsWith(".svg") || shot.src.endsWith(".png")}
                  />
                </div>
                <figcaption>{shot.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      ) : null}

      <div className="deliver">
        <div>
          <h2>工作產出</h2>
          <ul>
            {service.deliverables.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2>說明</h2>
          <p>{service.boundary}</p>
          <Link className="btn btn-primary" href="/contact">
            聯絡我們
          </Link>
        </div>
      </div>
    </section>
  );
}
