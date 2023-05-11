import { TSchema } from "@/types";

export const operacaoProdutoSchema: TSchema = [
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
