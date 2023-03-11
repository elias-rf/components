import { TFieldClient } from "../../../types";

export async function schemaProduto(): Promise<TFieldClient[]> {
  return [
    {
      name: "produto",
      label: "Produto",
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
