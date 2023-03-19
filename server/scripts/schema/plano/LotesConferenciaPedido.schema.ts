import { TTableDef } from "../../../../types/model";

export const LotesConferenciaPedido: TTableDef = {
  database: "plano",
  table: "LotesConferenciaPedido",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "NumPedido",
      label: "NumPedido",
      name: "NumPedido",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "FgConferencia",
      label: "FgConferencia",
      name: "FgConferencia",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "NumOrdemFaturamento",
      label: "NumOrdemFaturamento",
      name: "NumOrdemFaturamento",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
  ],
};
