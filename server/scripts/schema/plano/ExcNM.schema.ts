import { TTableDef } from "@/types/model";

export const ExcNM: TTableDef = {
  database: "plano",
  table: "ExcNM",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "NroNf",
      label: "NroNf",
      name: "NroNf",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "Serie",
      label: "Serie",
      name: "Serie",
      typeField: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "CdFornecedor",
      label: "CdFornecedor",
      name: "CdFornecedor",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "Nop",
      label: "Nop",
      name: "Nop",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "DtEmi",
      label: "DtEmi",
      name: "DtEmi",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "DtEntr",
      label: "DtEntr",
      name: "DtEntr",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "TotNf",
      label: "TotNf",
      name: "TotNf",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "BaseSubstituicao",
      label: "BaseSubstituicao",
      name: "BaseSubstituicao",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "IPIBasCalc",
      label: "IPIBasCalc",
      name: "IPIBasCalc",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "IPIVlr",
      label: "IPIVlr",
      name: "IPIVlr",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "IPIFrete",
      label: "IPIFrete",
      name: "IPIFrete",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "ICMSAliq",
      label: "ICMSAliq",
      name: "ICMSAliq",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "ICMSBasCalc",
      label: "ICMSBasCalc",
      name: "ICMSBasCalc",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "ICMSVlr",
      label: "ICMSVlr",
      name: "ICMSVlr",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "ICMSRetido",
      label: "ICMSRetido",
      name: "ICMSRetido",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "ICMSOperPropria",
      label: "ICMSOperPropria",
      name: "ICMSOperPropria",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "ICMSFrete",
      label: "ICMSFrete",
      name: "ICMSFrete",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "Frete",
      label: "Frete",
      name: "Frete",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "Seguro",
      label: "Seguro",
      name: "Seguro",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "DtValidacao",
      label: "DtValidacao",
      name: "DtValidacao",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "VlMercadorias",
      label: "VlMercadorias",
      name: "VlMercadorias",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "ConPag",
      label: "ConPag",
      name: "ConPag",
      typeField: "string",
      size: 1,
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
      field: "FgIPICompoeBase",
      label: "FgIPICompoeBase",
      name: "FgIPICompoeBase",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "Horario",
      label: "Horario",
      name: "Horario",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "VlNfComplementar",
      label: "VlNfComplementar",
      name: "VlNfComplementar",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "FgIPICompoeBaseSub",
      label: "FgIPICompoeBaseSub",
      name: "FgIPICompoeBaseSub",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "FgEstoque",
      label: "FgEstoque",
      name: "FgEstoque",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "IdParametro",
      label: "IdParametro",
      name: "IdParametro",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "Modelo",
      label: "Modelo",
      name: "Modelo",
      typeField: "string",
      size: 3,
      allowNull: false,
    },
  ],
};
