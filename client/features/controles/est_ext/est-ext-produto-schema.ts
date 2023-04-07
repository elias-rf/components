import { TFieldDef } from "../../../../types";

export const EsterilizacaoExternaProdutoSchema: TFieldDef[] = [
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
