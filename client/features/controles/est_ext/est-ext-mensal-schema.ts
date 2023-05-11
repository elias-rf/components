import { TSchema } from "@/types";

export const esterilizacaoExternaMensalSchema: TSchema = [
  {
    name: "mes",
    label: "Mês",
    typeField: "string",
    primaryKey: true,
  },
  {
    name: "quantidade",
    label: "Quantidade",
    typeField: "int",
  },
];
