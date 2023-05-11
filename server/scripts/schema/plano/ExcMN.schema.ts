import { TTableDef } from "@/types/model";

export const ExcMN: TTableDef = {
  database: "plano",
  table: "ExcMN",
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
      field: "DtEmissao",
      label: "DtEmissao",
      name: "DtEmissao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "Horario",
      label: "Horario",
      name: "Horario",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "Nop",
      label: "Nop",
      name: "Nop",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "FgEstatistica",
      label: "FgEstatistica",
      name: "FgEstatistica",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "fgEstoque",
      label: "fgEstoque",
      name: "fgEstoque",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "VlBaseCalculo",
      label: "VlBaseCalculo",
      name: "VlBaseCalculo",
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
      field: "CdCliente",
      label: "CdCliente",
      name: "CdCliente",
      typeField: "float",

      scale: 4,
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
      field: "PercComissao",
      label: "PercComissao",
      name: "PercComissao",
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
      field: "BaseSubstituicao",
      label: "BaseSubstituicao",
      name: "BaseSubstituicao",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "IcmsSubstituicao",
      label: "IcmsSubstituicao",
      name: "IcmsSubstituicao",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlIcms",
      label: "VlIcms",
      name: "VlIcms",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlIrrf",
      label: "VlIrrf",
      name: "VlIrrf",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlIss",
      label: "VlIss",
      name: "VlIss",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlProdutos",
      label: "VlProdutos",
      name: "VlProdutos",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlFrete",
      label: "VlFrete",
      name: "VlFrete",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlSeguro",
      label: "VlSeguro",
      name: "VlSeguro",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlAcessorias",
      label: "VlAcessorias",
      name: "VlAcessorias",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlIpi",
      label: "VlIpi",
      name: "VlIpi",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlServico",
      label: "VlServico",
      name: "VlServico",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlDesconto",
      label: "VlDesconto",
      name: "VlDesconto",
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
