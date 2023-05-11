import { TTableDef } from "@/types/model";

export const ExcIP: TTableDef = {
  database: "plano",
  table: "ExcIP",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NroPDV",
      label: "NroPDV",
      name: "NroPDV",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumCupom",
      label: "NumCupom",
      name: "NumCupom",
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
      field: "CdRefEstoque",
      label: "CdRefEstoque",
      name: "CdRefEstoque",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Quantidade",
      label: "Quantidade",
      name: "Quantidade",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlUnitario",
      label: "VlUnitario",
      name: "VlUnitario",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlDescGer",
      label: "VlDescGer",
      name: "VlDescGer",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlDescDir",
      label: "VlDescDir",
      name: "VlDescDir",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlTotal",
      label: "VlTotal",
      name: "VlTotal",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlLiquido",
      label: "VlLiquido",
      name: "VlLiquido",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "ClasFiscal",
      label: "ClasFiscal",
      name: "ClasFiscal",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "AliqISS",
      label: "AliqISS",
      name: "AliqISS",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "Aliquota",
      label: "Aliquota",
      name: "Aliquota",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlComissaoPrazo",
      label: "VlComissaoPrazo",
      name: "VlComissaoPrazo",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlComissaoVista",
      label: "VlComissaoVista",
      name: "VlComissaoVista",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "FgSituacao",
      label: "FgSituacao",
      name: "FgSituacao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CustoMedio",
      label: "CustoMedio",
      name: "CustoMedio",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "FgEstoque",
      label: "FgEstoque",
      name: "FgEstoque",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "ImprimeComponentes",
      label: "ImprimeComponentes",
      name: "ImprimeComponentes",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CdProdutoAssociado",
      label: "CdProdutoAssociado",
      name: "CdProdutoAssociado",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "PercLimiteComissao",
      label: "PercLimiteComissao",
      name: "PercLimiteComissao",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "CRM",
      label: "CRM",
      name: "CRM",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "ComplementoDescricao",
      label: "ComplementoDescricao",
      name: "ComplementoDescricao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "VlCusto",
      label: "VlCusto",
      name: "VlCusto",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
  ],
};
