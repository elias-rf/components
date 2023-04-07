import { TFieldDef } from "../../../../types";

export const esterilizacaoInternaMensalSchema: TFieldDef[] = [
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
