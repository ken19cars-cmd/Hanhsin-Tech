import Link from "next/link";
import { services } from "@/lib/site";

export default function ServiceOrbit() {
  return (
    <div className="service-orbit" aria-label="五大系統應用">
      <div className="service-orbit-rail" aria-hidden="true" />
      {services.map((service, index) => (
        <Link
          key={service.slug}
          href={`/services/${service.slug}`}
          className="service-orbit-item"
          style={{ ["--i" as string]: String(index) }}
        >
          <span className="service-orbit-index">{service.index}</span>
          <div className="service-orbit-copy">
            <h3>{service.title}</h3>
            <p>{service.short}</p>
          </div>
          <span className="service-orbit-go" aria-hidden="true">
            →
          </span>
        </Link>
      ))}
    </div>
  );
}
