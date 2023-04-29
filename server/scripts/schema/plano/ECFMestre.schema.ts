import { TTableDef } from "@mono/types/model";

export const ECFMestre: TTableDef = {
  database: "plano",
  table: "ECFMestre",
  fields: [
    {
      field: "CNPJFilial",
      label: "CNPJFilial",
      name: "CNPJFilial",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "NumECF",
      label: "NumECF",
      name: "NumECF",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "DtBase",
      label: "DtBase",
      name: "DtBase",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "COOInicial",
      label: "COOInicial",
      name: "COOInicial",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "COOFinal",
      label: "COOFinal",
      name: "COOFinal",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "NumReducaoZ",
      label: "NumReducaoZ",
      name: "NumReducaoZ",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "ContadorReinicio",
      label: "ContadorReinicio",
      name: "ContadorReinicio",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlVendaBruta",
      label: "VlVendaBruta",
      name: "VlVendaBruta",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlTotalizador",
      label: "VlTotalizador",
      name: "VlTotalizador",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "NumSerie",
      label: "NumSerie",
      name: "NumSerie",
      typeField: "string",
      size: 32,
      allowNull: false,
    },
    {
      field: "TipoReducao",
      label: "TipoReducao",
      name: "TipoReducao",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "NumCOOReducao",
      label: "NumCOOReducao",
      name: "NumCOOReducao",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "DtEmissaoReducao",
      label: "DtEmissaoReducao",
      name: "DtEmissaoReducao",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "HrEmissaoReducao",
      label: "HrEmissaoReducao",
      name: "HrEmissaoReducao",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "NumUsuario",
      label: "NumUsuario",
      name: "NumUsuario",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "ParamDescISS",
      label: "ParamDescISS",
      name: "ParamDescISS",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "VlGrandeTotal",
      label: "VlGrandeTotal",
      name: "VlGrandeTotal",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlNaoFiscal",
      label: "VlNaoFiscal",
      name: "VlNaoFiscal",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlAcrescimo",
      label: "VlAcrescimo",
      name: "VlAcrescimo",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "ControleFilial",
      label: "ControleFilial",
      name: "ControleFilial",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "ControleECF",
      label: "ControleECF",
      name: "ControleECF",
      typeField: "int",
      size: 2,
    },
    {
      field: "ControleSerie",
      label: "ControleSerie",
      name: "ControleSerie",
      typeField: "string",
      size: 32,
    },
    {
      field: "ControleData",
      label: "ControleData",
      name: "ControleData",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
  ],
};
