import type { LabelFamily, LabelProfile } from "@/lib/service-types";
import { barrierFree, bers, eewh, housingPerformance, intelligentBuilding, lebr } from "./domestic";
import { gnfz, gresb, leed, leedZero, well } from "./international";

export const labelFamilies: (LabelFamily & { items: LabelProfile[] })[] = [
  {
    title: "國際綠建築與淨零認證",
    desc: "跨國企業、外商租戶與國際投資人最常要求的認證，從單棟建築延伸到投資組合。",
    items: [leed, leedZero, well, gnfz, gresb],
  },
  {
    title: "國內建築標章與標示",
    desc: "內政部制定與認可的標章、標示與性能評估，對接公有工程、容積獎勵與不動產交易。",
    items: [eewh, intelligentBuilding, lebr, bers, housingPerformance, barrierFree],
  },
];

export const labels: LabelProfile[] = labelFamilies.flatMap((family) => family.items);

export function getLabel(id: string) {
  return labels.find((label) => label.id === id);
}

export function labelHref(id: string) {
  return `/labels/${id}`;
}
