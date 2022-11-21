import { TTable } from "../../../../types";

export const PedidoItemPedCliente: TTable = {
  database: "plano",
  table: "PedidoItemPedCliente",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      type: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "NumPedido",
      label: "NumPedido",
      name: "NumPedido",
      type: "int",
      size: 5,
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
      field: "Sequencia",
      label: "Sequencia",
      name: "Sequencia",
      type: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "NumPedCliente",
      label: "NumPedCliente",
      name: "NumPedCliente",
      type: "string",
      size: 16,
      allowNull: false,
    },
    {
      field: "ItemPedCliente",
      label: "ItemPedCliente",
      name: "ItemPedCliente",
      type: "string",
      size: 32,
      allowNull: false,
    },
  ],
};
