import { TTableDef } from "@/types/model";

export const PharmaLinkItemPedido: TTableDef = {
  database: "plano",
  table: "PharmaLinkItemPedido",
  fields: [
    {
      field: "NumAutorizacao",
      label: "NumAutorizacao",
      name: "NumAutorizacao",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdProdutoPharmaLink",
      label: "CdProdutoPharmaLink",
      name: "CdProdutoPharmaLink",
      typeField: "string",

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
      field: "Quantidade",
      label: "Quantidade",
      name: "Quantidade",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "VlBruto",
      label: "VlBruto",
      name: "VlBruto",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlLoja",
      label: "VlLoja",
      name: "VlLoja",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlPharmaLink",
      label: "VlPharmaLink",
      name: "VlPharmaLink",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlReceberLoja",
      label: "VlReceberLoja",
      name: "VlReceberLoja",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "Desconto",
      label: "Desconto",
      name: "Desconto",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "DtRetorno",
      label: "DtRetorno",
      name: "DtRetorno",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "CdStatus",
      label: "CdStatus",
      name: "CdStatus",
      typeField: "int",

      allowNull: false,
    },
  ],
};
