import { TEntity } from "../../../../types";

export const PedidoPagamentosEntrada: TEntity = {
  database: "plano",
  table: "PedidoPagamentosEntrada",
  fields: [
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
      field: "Tipo",
      label: "Tipo",
      name: "Tipo",
      type: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "DtVencimento",
      label: "DtVencimento",
      name: "DtVencimento",
      type: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "Valor",
      label: "Valor",
      name: "Valor",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "Seq",
      label: "Seq",
      name: "Seq",
      type: "int",
      size: 4,
    },
  ],
};
