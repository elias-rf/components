import { TEntity } from "../../../../types";

export const LotesConferenciaPedido: TEntity = {
  database: "plano",
  table: "LotesConferenciaPedido",
  schema: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "NumPedido",
      label: "NumPedido",
      name: "NumPedido",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "FgConferencia",
      label: "FgConferencia",
      name: "FgConferencia",
      type: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "NumOrdemFaturamento",
      label: "NumOrdemFaturamento",
      name: "NumOrdemFaturamento",
      type: "int",
      size: 5,
      allowNull: false,
    },
  ],
};
