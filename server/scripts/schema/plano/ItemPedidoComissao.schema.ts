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
      field: "CdVendedor",
      label: "CdVendedor",
      name: "CdVendedor",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "PercComissaoVista",
      label: "PercComissaoVista",
      name: "PercComissaoVista",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "PercComissaoPrazo",
      label: "PercComissaoPrazo",
      name: "PercComissaoPrazo",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
  ],
};
