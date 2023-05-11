import { TSchema } from "@/types";

export const operacaoModeloSchema: TSchema = [
  {
    name: "modelo",
    label: "Modelo",
    primaryKey: true,
    typeField: "string",
  },
  {
    name: "quantidade",
    label: "Quantidade",
    typeField: "int",
  },
];
