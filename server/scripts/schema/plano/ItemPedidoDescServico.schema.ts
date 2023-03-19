import { TTableDef } from "../../../../types/model";

export const ItemPedidoDescServico: TTableDef = {
  database: "plano",
  table: "ItemPedidoDescServico",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",
      size: 2,
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
      field: "DescricaoServico",
      label: "DescricaoServico",
      name: "DescricaoServico",
      typeField: "string",
      size: 5120,
    },
  ],
};
