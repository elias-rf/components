import { TTableDef } from "@/types/model";

export const MestreLancTransporte: TTableDef = {
  database: "plano",
  table: "MestreLancTransporte",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

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
      field: "DtEmissao",
      label: "DtEmissao",
      name: "DtEmissao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "DtAquisicao",
      label: "DtAquisicao",
      name: "DtAquisicao",
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
      field: "TipoFrete",
      label: "TipoFrete",
      name: "TipoFrete",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "VlDocumento",
      label: "VlDocumento",
      name: "VlDocumento",
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
      field: "VlServico",
      label: "VlServico",
      name: "VlServico",
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
      field: "VlICMS",
      label: "VlICMS",
      name: "VlICMS",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlNaoTributado",
      label: "VlNaoTributado",
      name: "VlNaoTributado",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "IndicadorNatFrete",
      label: "IndicadorNatFrete",
      name: "IndicadorNatFrete",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumChaveNFE",
      label: "NumChaveNFE",
      name: "NumChaveNFE",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "SituacaoDoc",
      label: "SituacaoDoc",
      name: "SituacaoDoc",
      typeField: "int",
    },
    {
      field: "ObsGerais",
      label: "ObsGerais",
      name: "ObsGerais",
      typeField: "string",
    },
  ],
};
