import { TSchema } from "@/types";

export const esterilizacaoExternaModeloSchema: TSchema = [
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
