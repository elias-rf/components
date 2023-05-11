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

      allowNull: false,
    },
    {
      field: "NroNf",
      label: "NroNf",
      name: "NroNf",
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
      field: "CdFornecedor",
      label: "CdFornecedor",
      name: "CdFornecedor",
      typeField: "float",

      scale: 4,
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
      field: "DtEmi",
      label: "DtEmi",
      name: "DtEmi",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "DtEntr",
      label: "DtEntr",
      name: "DtEntr",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "TotNf",
      label: "TotNf",
      name: "TotNf",
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
      field: "IPIBasCalc",
      label: "IPIBasCalc",
      name: "IPIBasCalc",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "IPIVlr",
      label: "IPIVlr",
      name: "IPIVlr",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "IPIFrete",
      label: "IPIFrete",
      name: "IPIFrete",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "ICMSAliq",
      label: "ICMSAliq",
      name: "ICMSAliq",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "ICMSBasCalc",
      label: "ICMSBasCalc",
      name: "ICMSBasCalc",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "ICMSVlr",
      label: "ICMSVlr",
      name: "ICMSVlr",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "ICMSRetido",
      label: "ICMSRetido",
      name: "ICMSRetido",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "ICMSOperPropria",
      label: "ICMSOperPropria",
      name: "ICMSOperPropria",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "ICMSFrete",
      label: "ICMSFrete",
      name: "ICMSFrete",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "Frete",
      label: "Frete",
      name: "Frete",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "Seguro",
      label: "Seguro",
      name: "Seguro",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "DtValidacao",
      label: "DtValidacao",
      name: "DtValidacao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "VlMercadorias",
      label: "VlMercadorias",
      name: "VlMercadorias",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "ConPag",
      label: "ConPag",
      name: "ConPag",
      typeField: "string",

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
      field: "FgIPICompoeBase",
      label: "FgIPICompoeBase",
      name: "FgIPICompoeBase",
      typeField: "string",

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
      field: "VlNfComplementar",
      label: "VlNfComplementar",
      name: "VlNfComplementar",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "FgIPICompoeBaseSub",
      label: "FgIPICompoeBaseSub",
      name: "FgIPICompoeBaseSub",
      typeField: "string",

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
      field: "IdParametro",
      label: "IdParametro",
      name: "IdParametro",
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
  ],
};
