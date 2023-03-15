import { TTable } from "../../../../types/model";

export const ItemPedidoAMIVida: TTable = {
  database: "plano",
  table: "ItemPedidoAMIVida",
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
      field: "Sequencia",
      label: "Sequencia",
      name: "Sequencia",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",
      size: 15,
      allowNull: false,
    },
    {
      field: "Posologia",
      label: "Posologia",
      name: "Posologia",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "MedidaDoses",
      label: "MedidaDoses",
      name: "MedidaDoses",
      typeField: "string",
      size: 1,
    },
    {
      field: "NumDosesDia",
      label: "NumDosesDia",
      name: "NumDosesDia",
      typeField: "int",
      size: 2,
    },
  ],
};
