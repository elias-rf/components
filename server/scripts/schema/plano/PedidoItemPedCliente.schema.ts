import { TTable } from "../../../../types/model";

export const PedidoItemPedCliente: TTable = {
  database: "plano",
  table: "PedidoItemPedCliente",
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
      field: "Tipo",
      label: "Tipo",
      name: "Tipo",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "Sequencia",
      label: "Sequencia",
      name: "Sequencia",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "NumPedCliente",
      label: "NumPedCliente",
      name: "NumPedCliente",
      typeField: "string",
      size: 16,
      allowNull: false,
    },
    {
      field: "ItemPedCliente",
      label: "ItemPedCliente",
      name: "ItemPedCliente",
      typeField: "string",
      size: 32,
      allowNull: false,
    },
  ],
};
