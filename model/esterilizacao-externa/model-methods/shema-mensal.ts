import { TFieldClient } from "../../../types";

export async function schemaMensal(): Promise<TFieldClient[]> {
  return [
    {
      name: "mes",
      label: "Mês",
      type: "string",
      primaryKey: true,
    },
    {
      name: "quantidade",
      label: "Quantidade",
      type: "int",
    },
  ];
}
