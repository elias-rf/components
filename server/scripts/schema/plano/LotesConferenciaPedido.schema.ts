import { TTableDef } from "@/types/model";

export const LotesConferenciaPedido: TTableDef = {
  database: "plano",
  table: "LotesConferenciaPedido",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "NumPedido",
      label: "NumPedido",
      name: "NumPedido",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "FgConferencia",
      label: "FgConferencia",
      name: "FgConferencia",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "NumOrdemFaturamento",
      label: "NumOrdemFaturamento",
      name: "NumOrdemFaturamento",
      typeField: "int",

      allowNull: false,
    },
  ],
};
