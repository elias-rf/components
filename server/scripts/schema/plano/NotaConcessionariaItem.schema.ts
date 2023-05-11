import { TTableDef } from "@/types/model";

export const NotaConcessionariaItem: TTableDef = {
  database: "plano",
  table: "NotaConcessionariaItem",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Modelo",
      label: "Modelo",
      name: "Modelo",
      typeField: "string",

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
      field: "SubSerie",
      label: "SubSerie",
      name: "SubSerie",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "NumDoc",
      label: "NumDoc",
      name: "NumDoc",
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
      field: "Quantidade",
      label: "Quantidade",
      name: "Quantidade",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlTotalItem",
      label: "VlTotalItem",
      name: "VlTotalItem",
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
      field: "CFOP",
      label: "CFOP",
      name: "CFOP",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "CFOPFiscal",
      label: "CFOPFiscal",
      name: "CFOPFiscal",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "SituacaoTributariaICMS",
      label: "SituacaoTributariaICMS",
      name: "SituacaoTributariaICMS",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "VlBaseCalculoICMS",
      label: "VlBaseCalculoICMS",
      name: "VlBaseCalculoICMS",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "AliquotaICMS",
      label: "AliquotaICMS",
      name: "AliquotaICMS",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlICMS",
      label: "VlICMS",
      name: "VlICMS",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlBaseCalculoICMSST",
      label: "VlBaseCalculoICMSST",
      name: "VlBaseCalculoICMSST",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "AliquotaICMSST",
      label: "AliquotaICMSST",
      name: "AliquotaICMSST",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlICMSST",
      label: "VlICMSST",
      name: "VlICMSST",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "FgIndicadorReceita",
      label: "FgIndicadorReceita",
      name: "FgIndicadorReceita",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "VlBaseCalculoPIS",
      label: "VlBaseCalculoPIS",
      name: "VlBaseCalculoPIS",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "AliquotaPIS",
      label: "AliquotaPIS",
      name: "AliquotaPIS",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlPIS",
      label: "VlPIS",
      name: "VlPIS",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlBaseCalculoCOFINS",
      label: "VlBaseCalculoCOFINS",
      name: "VlBaseCalculoCOFINS",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "AliquotaCOFINS",
      label: "AliquotaCOFINS",
      name: "AliquotaCOFINS",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlCOFINS",
      label: "VlCOFINS",
      name: "VlCOFINS",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
  ],
};
