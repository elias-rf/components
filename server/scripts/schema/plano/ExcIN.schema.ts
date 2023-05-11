import { TTableDef } from "@/types/model";

export const ExcIN: TTableDef = {
  database: "plano",
  table: "ExcIN",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumNota",
      label: "NumNota",
      name: "NumNota",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Serie",
      label: "Serie",
      name: "Serie",
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
      field: "Sequencia",
      label: "Sequencia",
      name: "Sequencia",
      typeField: "int",

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
      field: "VlTotal",
      label: "VlTotal",
      name: "VlTotal",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "AliqIcms",
      label: "AliqIcms",
      name: "AliqIcms",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "BaseCalculo",
      label: "BaseCalculo",
      name: "BaseCalculo",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlICms",
      label: "VlICms",
      name: "VlICms",
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
      field: "FgEstoque",
      label: "FgEstoque",
      name: "FgEstoque",
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
    {
      field: "CustoMedio",
      label: "CustoMedio",
      name: "CustoMedio",
      typeField: "float",

      scale: 4,
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
      field: "CdRefEstoque",
      label: "CdRefEstoque",
      name: "CdRefEstoque",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "PercDesconto",
      label: "PercDesconto",
      name: "PercDesconto",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "AliqIPI",
      label: "AliqIPI",
      name: "AliqIPI",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "BaseSub",
      label: "BaseSub",
      name: "BaseSub",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "FgKit",
      label: "FgKit",
      name: "FgKit",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgPeso",
      label: "FgPeso",
      name: "FgPeso",
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
      field: "Irrf",
      label: "Irrf",
      name: "Irrf",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "MargemSub",
      label: "MargemSub",
      name: "MargemSub",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "Peso",
      label: "Peso",
      name: "Peso",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "ReducaoICMS",
      label: "ReducaoICMS",
      name: "ReducaoICMS",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "TaxaFCA",
      label: "TaxaFCA",
      name: "TaxaFCA",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "TipoMovimentacao",
      label: "TipoMovimentacao",
      name: "TipoMovimentacao",
      typeField: "string",

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
      field: "VlICMSSub",
      label: "VlICMSSub",
      name: "VlICMSSub",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VLIPI",
      label: "VLIPI",
      name: "VLIPI",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VLISS",
      label: "VLISS",
      name: "VLISS",
      typeField: "float",

      scale: 4,
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
      field: "Modelo",
      label: "Modelo",
      name: "Modelo",
      typeField: "string",

      allowNull: false,
    },
  ],
};
