import { TFieldDef } from "@/types";

export const operacaoMensalSchema: TFieldDef[] = [
  {
    name: "mes",
    label: "Mês",
    primaryKey: true,
    typeField: "string",
  },
  {
    name: "quantidade",
    label: "Quantidade",
    typeField: "int",
  },
];
