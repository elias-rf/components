import { TTableDef } from "@/types/model";

export const ECFMestre: TTableDef = {
  database: "plano",
  table: "ECFMestre",
  fields: [
    {
      field: "CNPJFilial",
      label: "CNPJFilial",
      name: "CNPJFilial",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "NumECF",
      label: "NumECF",
      name: "NumECF",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "DtBase",
      label: "DtBase",
      name: "DtBase",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "COOInicial",
      label: "COOInicial",
      name: "COOInicial",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "COOFinal",
      label: "COOFinal",
      name: "COOFinal",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "NumReducaoZ",
      label: "NumReducaoZ",
      name: "NumReducaoZ",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "ContadorReinicio",
      label: "ContadorReinicio",
      name: "ContadorReinicio",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlVendaBruta",
      label: "VlVendaBruta",
      name: "VlVendaBruta",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlTotalizador",
      label: "VlTotalizador",
      name: "VlTotalizador",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "NumSerie",
      label: "NumSerie",
      name: "NumSerie",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "TipoReducao",
      label: "TipoReducao",
      name: "TipoReducao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "NumCOOReducao",
      label: "NumCOOReducao",
      name: "NumCOOReducao",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "DtEmissaoReducao",
      label: "DtEmissaoReducao",
      name: "DtEmissaoReducao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "HrEmissaoReducao",
      label: "HrEmissaoReducao",
      name: "HrEmissaoReducao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "NumUsuario",
      label: "NumUsuario",
      name: "NumUsuario",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "ParamDescISS",
      label: "ParamDescISS",
      name: "ParamDescISS",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "VlGrandeTotal",
      label: "VlGrandeTotal",
      name: "VlGrandeTotal",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlNaoFiscal",
      label: "VlNaoFiscal",
      name: "VlNaoFiscal",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlAcrescimo",
      label: "VlAcrescimo",
      name: "VlAcrescimo",
      typeField: "float",

      scale: 4,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "ControleFilial",
      label: "ControleFilial",
      name: "ControleFilial",
      typeField: "float",

      scale: 4,
    },
    {
      field: "ControleECF",
      label: "ControleECF",
      name: "ControleECF",
      typeField: "int",
    },
    {
      field: "ControleSerie",
      label: "ControleSerie",
      name: "ControleSerie",
      typeField: "string",
    },
    {
      field: "ControleData",
      label: "ControleData",
      name: "ControleData",
      typeField: "datetime",

      scale: 3,
    },
  ],
};
