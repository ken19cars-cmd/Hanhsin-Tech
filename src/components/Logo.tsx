import Image from "next/image";
import { company } from "@/lib/site";

type Props = {
  compact?: boolean;
};

export default function Logo({ compact = false }: Props) {
  return (
    <span className={`logo ${compact ? "logo-compact" : ""}`}>
      <Image
        src="/logo-mark.png"
        alt=""
        width={56}
        height={64}
        priority
        className="logo-mark"
      />
      <span className="logo-text">
        <span className="logo-zh">{company.nameZh}</span>
        <span className="logo-en">{company.nameEn}</span>
      </span>
    </span>
  );
}
