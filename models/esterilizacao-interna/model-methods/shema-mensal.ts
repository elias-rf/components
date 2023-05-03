import { TFieldDef } from "@/types";

export async function schemaMensal(): Promise<TFieldDef[]> {
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
