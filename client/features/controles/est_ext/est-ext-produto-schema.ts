import { TSchema } from "@/types";

export const EsterilizacaoExternaProdutoSchema: TSchema = [
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
