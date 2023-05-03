import { TFieldDef } from "@/types";

export const operacaoTurnoSchema: TFieldDef[] = [
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
