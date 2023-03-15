import { TField } from "../../../types";

export async function schemaMensal(): Promise<TField[]> {
  return [
    {
      name: "mes",
      label: "Mês",
      typeField: "string",
      primaryKey: true,
    },
    {
      name: "quantidade",
      label: "Quantidade",
      typeField: "int",
    },
  ];
}
