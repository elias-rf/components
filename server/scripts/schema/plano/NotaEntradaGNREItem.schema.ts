import { TTableDef } from "@/types/model";

export const NotaEntradaGNREItem: TTableDef = {
  database: "plano",
  table: "NotaEntradaGNREItem",
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
      field: "Modelo",
      label: "Modelo",
      name: "Modelo",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CdFornecedor",
      label: "CdFornecedor",
      name: "CdFornecedor",
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
      field: "ClassificacaoProduto",
      label: "ClassificacaoProduto",
      name: "ClassificacaoProduto",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "VlPMC",
      label: "VlPMC",
      name: "VlPMC",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "PercRedBaseSTPMC",
      label: "PercRedBaseSTPMC",
      name: "PercRedBaseSTPMC",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "PercMVA",
      label: "PercMVA",
      name: "PercMVA",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "PercRedBaseSTMVA",
      label: "PercRedBaseSTMVA",
      name: "PercRedBaseSTMVA",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "PercReducaoICMS",
      label: "PercReducaoICMS",
      name: "PercReducaoICMS",
      typeField: "float",

      scale: 4,
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
      field: "VlBaseCalculoICMSSub",
      label: "VlBaseCalculoICMSSub",
      name: "VlBaseCalculoICMSSub",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "AliquotaICMSSub",
      label: "AliquotaICMSSub",
      name: "AliquotaICMSSub",
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
      field: "VlICMSRecolher",
      label: "VlICMSRecolher",
      name: "VlICMSRecolher",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
  ],
};
