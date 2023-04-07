import { TFieldDef } from "../../../../types";

export const operacaoModeloSchema: TFieldDef[] = [
  {
    name: "modelo",
    label: "Modelo",
    primaryKey: true,
    typeField: "string",
  },
  {
    name: "quantidade",
    label: "Quantidade",
    typeField: "int",
  },
];
