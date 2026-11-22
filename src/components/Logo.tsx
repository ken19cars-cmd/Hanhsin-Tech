import Image from "next/image";
import { company } from "@/lib/site";

type Props = {
  compact?: boolean;
};

export default function Logo({ compact = false }: Props) {
  return (
    <span className={`logo ${compact ? "logo-compact" : ""}`}>
      <Image
        src="/logo-hanxin.svg"
        alt={`${company.nameZh} Logo`}
        width={compact ? 220 : 320}
        height={compact ? 40 : 56}
        priority
        className="logo-img"
      />
    </span>
  );
}
