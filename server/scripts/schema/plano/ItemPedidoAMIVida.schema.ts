import { TEntity } from "../../../../types";

export const ItemPedidoAMIVida: TEntity = {
  database: "plano",
  table: "ItemPedidoAMIVida",
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
      field: "Sequencia",
      label: "Sequencia",
      name: "Sequencia",
      type: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      type: "string",
      size: 15,
      allowNull: false,
    },
    {
      field: "Posologia",
      label: "Posologia",
      name: "Posologia",
      type: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "MedidaDoses",
      label: "MedidaDoses",
      name: "MedidaDoses",
      type: "string",
      size: 1,
    },
    {
      field: "NumDosesDia",
      label: "NumDosesDia",
      name: "NumDosesDia",
      type: "int",
      size: 2,
    },
  ],
};
