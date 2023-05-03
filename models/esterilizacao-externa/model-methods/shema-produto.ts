import { TFieldDef } from "@/types";

export async function schemaProduto(): Promise<TFieldDef[]> {
  return [
    {
      name: "produto",
      label: "Produto",
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
