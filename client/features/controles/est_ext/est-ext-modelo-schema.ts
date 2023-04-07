import { TFieldDef } from "../../../../types";

export const esterilizacaoExternaModeloSchema: TFieldDef[] = [
  {
    name: "modelo",
    label: "Modelo",
    typeField: "string",
    primaryKey: true,
  },
  {
    name: "quantidade",
    label: "Quantidade",
    typeField: "int",
  },
];
