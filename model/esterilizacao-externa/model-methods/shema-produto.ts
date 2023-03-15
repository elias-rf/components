import { TField } from "../../../types";

export async function schemaProduto(): Promise<TField[]> {
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
