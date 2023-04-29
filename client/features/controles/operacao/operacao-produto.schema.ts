import { TFieldDef } from "@mono/types";

export const operacaoProdutoSchema: TFieldDef[] = [
  {
    name: "produto",
    label: "Produto",
    primaryKey: true,
    typeField: "string",
  },
  {
    name: "quantidade",
    label: "Quantidade",
    typeField: "int",
  },
];
