import { TSchema } from "@/types";

export async function schemaProduto(): Promise<TSchema> {
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
