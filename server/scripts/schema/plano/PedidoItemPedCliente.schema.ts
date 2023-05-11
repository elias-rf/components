import { TTableDef } from "@/types/model";

export const PedidoItemPedCliente: TTableDef = {
  database: "plano",
  table: "PedidoItemPedCliente",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumPedido",
      label: "NumPedido",
      name: "NumPedido",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Tipo",
      label: "Tipo",
      name: "Tipo",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Sequencia",
      label: "Sequencia",
      name: "Sequencia",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumPedCliente",
      label: "NumPedCliente",
      name: "NumPedCliente",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "ItemPedCliente",
      label: "ItemPedCliente",
      name: "ItemPedCliente",
      typeField: "string",

      allowNull: false,
    },
  ],
};
