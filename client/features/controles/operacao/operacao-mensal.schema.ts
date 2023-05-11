import { TSchema } from "@/types";

export const operacaoMensalSchema: TSchema = [
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
