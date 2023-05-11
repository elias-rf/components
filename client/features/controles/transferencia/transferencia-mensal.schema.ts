import { TSchema } from "@/types";

export const transferenciaMensalSchema: TSchema = [
  {
    name: "mes",
    label: "Mês",
    labelClass: "text-center",
    fieldClass: "text-left",
    typeField: "string",
    primaryKey: true,
  },
  {
    name: "LITEFLEX",
    label: "LiteFlex",
    labelClass: "text-right",
    fieldClass: "text-right",
  },
  {
    name: "HILITE",
    label: "HiLite",
    labelClass: "text-right",
    fieldClass: "text-right",
  },
  {
    name: "ENLITE",
    label: "EnLite",
    labelClass: "text-right",
    fieldClass: "text-right",
  },
  {
    name: "METILCELULOSE",
    label: "Metil",
    labelClass: "text-right",
    fieldClass: "text-right",
  },
  {
    name: "CORNEAL RING",
    label: "Corneal Ring",
    labelClass: "text-right",
    fieldClass: "text-right",
  },
  {
    name: "ANEL CAPSULAR",
    label: "Anel Capsular",
    labelClass: "text-right",
    fieldClass: "text-right",
  },
];
