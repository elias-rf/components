import { TSchema } from "@/types";

export async function schemaMensal(): Promise<TSchema> {
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
