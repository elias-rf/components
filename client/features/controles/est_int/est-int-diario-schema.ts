import { TSchema } from "@/types";

export const esterilizacaoInternaDiarioSchema: TSchema = [
  {
    name: "dia",
    label: "Dia",
    typeField: "string",
    primaryKey: true,
  },
  {
    name: "dia_semana",
    label: "Dia Semana",
    typeField: "string",
  },
  {
    name: "quantidade",
    label: "Quantidade",
    typeField: "int",
  },
];
