import { TSchema } from "@/types";

export const operacaoTurnoSchema: TSchema = [
  {
    name: "turno",
    label: "Turno",
    primaryKey: true,
    typeField: "string",
  },
  {
    name: "quantidade",
    label: "Quantidade",
    typeField: "int",
  },
];
