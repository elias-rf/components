import { TTableDef } from "@/types/model";

export const ItemPedidoDescServico: TTableDef = {
  database: "plano",
  table: "ItemPedidoDescServico",
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
      typeField: "float",

      scale: 4,
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
      field: "DescricaoServico",
      label: "DescricaoServico",
      name: "DescricaoServico",
      typeField: "string",
    },
  ],
};
