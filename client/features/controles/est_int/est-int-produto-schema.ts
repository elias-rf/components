import { TSchema } from "@/types";

export const EsterilizacaoInternaProdutoSchema: TSchema = [
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
