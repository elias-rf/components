import { TSchema } from "@/types";

export const operacaoDiarioSchema: TSchema = [
  {
    name: "dia",
    label: "Dia",
    primaryKey: true,
    typeField: "string",
  },
  {
    name: "diaSemana",
    label: "Dia Semana",
    typeField: "string",
  },
  {
    name: "quantidade",
    label: "Quantidade",
    typeField: "string",
  },
];
