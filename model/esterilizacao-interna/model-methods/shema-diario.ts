import { TFieldClient } from "../../../types";

export async function schemaDiario(): Promise<TFieldClient[]> {
  return [
    {
      name: "dia",
      label: "Dia",
      type: "string",
      primaryKey: true,
    },
    {
      name: "dia_semana",
      label: "Dia Semana",
      type: "string",
    },
    {
      name: "quantidade",
      label: "Quantidade",
      type: "int",
    },
  ];
}
