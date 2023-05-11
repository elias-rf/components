import { TTableDef } from "@/types/model";

export const ItemPedidoComissao: TTableDef = {
  database: "plano",
  table: "ItemPedidoComissao",
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
      field: "CdVendedor",
      label: "CdVendedor",
      name: "CdVendedor",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "PercComissaoVista",
      label: "PercComissaoVista",
      name: "PercComissaoVista",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "PercComissaoPrazo",
      label: "PercComissaoPrazo",
      name: "PercComissaoPrazo",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
  ],
};
