import { TTableDef } from "@mono/types/model";

export const PedidoPagamentoFinanciamento: TTableDef = {
  database: "plano",
  table: "PedidoPagamentoFinanciamento",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "NumPedido",
      label: "NumPedido",
      name: "NumPedido",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "CdFinanceira",
      label: "CdFinanceira",
      name: "CdFinanceira",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "NumParcelas",
      label: "NumParcelas",
      name: "NumParcelas",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "VlParcela",
      label: "VlParcela",
      name: "VlParcela",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "DtUltAtualizacao",
      label: "DtUltAtualizacao",
      name: "DtUltAtualizacao",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
  ],
};
