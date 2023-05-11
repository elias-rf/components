import { TTableDef } from "@/types/model";

export const ItemPedidoAMIVida: TTableDef = {
  database: "plano",
  table: "ItemPedidoAMIVida",
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
      field: "Sequencia",
      label: "Sequencia",
      name: "Sequencia",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Posologia",
      label: "Posologia",
      name: "Posologia",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "MedidaDoses",
      label: "MedidaDoses",
      name: "MedidaDoses",
      typeField: "string",
    },
    {
      field: "NumDosesDia",
      label: "NumDosesDia",
      name: "NumDosesDia",
      typeField: "int",
    },
  ],
};
