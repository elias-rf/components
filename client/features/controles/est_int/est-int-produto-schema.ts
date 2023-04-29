import { TFieldDef } from "@mono/types";

export const EsterilizacaoInternaProdutoSchema: TFieldDef[] = [
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
