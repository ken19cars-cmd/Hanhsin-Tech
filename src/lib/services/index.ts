import type { Service } from "@/lib/service-types";
import { drawings } from "./drawings";
import { esg } from "./esg";
import { gis } from "./gis";
import { green } from "./green";
import { pmis } from "./pmis";

export const serviceList: Service[] = [pmis, drawings, green, esg, gis];
