import { TEntity } from "../../../../types";

export const ItemPedidoDescServico: TEntity = {
  database: "plano",
  table: "ItemPedidoDescServico",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      type: "int",
      size: 2,
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
      field: "Sequencia",
      label: "Sequencia",
      name: "Sequencia",
      type: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "DescricaoServico",
      label: "DescricaoServico",
      name: "DescricaoServico",
      type: "string",
      size: 5120,
    },
  ],
};
