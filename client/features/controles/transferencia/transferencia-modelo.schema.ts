import { TFieldDef } from "@/types";

export const transferenciaModeloSchema: TFieldDef[] = [
  {
    name: "modelo",
    label: "Modelo",
    labelClass: "text-center",
    fieldClass: "text-left",
    typeField: "string",
    primaryKey: true,
  },
  {
    name: "quantidade",
    label: "Quantidade",
    labelClass: "text-right",
    fieldClass: "text-right",
  },
];
