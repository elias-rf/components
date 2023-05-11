import { TTableDef } from "@/types/model";

export const ItemPedidoDescComercial: TTableDef = {
  database: "plano",
  table: "ItemPedidoDescComercial",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
      typeField: "int",

      allowNull: false,
    },
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
      field: "PercRepasseComercial",
      label: "PercRepasseComercial",
      name: "PercRepasseComercial",
      typeField: "int",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlRepasseComercial",
      label: "VlRepasseComercial",
      name: "VlRepasseComercial",
      typeField: "int",

      scale: 4,
      allowNull: false,
    },
    {
      field: "PercDescontoComercial",
      label: "PercDescontoComercial",
      name: "PercDescontoComercial",
      typeField: "int",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlDescontoComercial",
      label: "VlDescontoComercial",
      name: "VlDescontoComercial",
      typeField: "int",

      scale: 4,
      allowNull: false,
    },
  ],
};
