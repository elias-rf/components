import { TFieldDef } from "@mono/types";

export const operacaoDiarioSchema: TFieldDef[] = [
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
