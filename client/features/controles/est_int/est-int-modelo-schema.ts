import { TFieldDef } from "../../../../types";

export const esterilizacaoInternaModeloSchema: TFieldDef[] = [
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