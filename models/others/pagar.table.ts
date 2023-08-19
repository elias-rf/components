import { TTableDef } from "@/types";

export const pagar: TTableDef = {
  database: "plano",
  table: "ArqDup",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "filial_id",
      primaryKey: true,
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumDoc",
      label: "NumDoc",
      name: "doc_id",
      primaryKey: true,
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CodFor",
      label: "CodFor",
      name: "fornecedor_id",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "SeqDoc",
      label: "SeqDoc",
      name: "item_doc",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Serie",
      label: "Serie",
      name: "serie",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DatEmi",
      label: "DatEmi",
      name: "data_emissao",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "DatVen",
      label: "DatVen",
      name: "data_venda",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "DatPag",
      label: "DatPag",
      name: "data_pagamento",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "TipInd",
      label: "TipInd",
      name: "TipInd",
      typeField: "string",
    },
    {
      field: "Aceite",
      label: "Aceite",
      name: "aceite",
      typeField: "string",
    },
    {
      field: "NumFat",
      label: "NumFat",
      name: "NumFat",
      typeField: "int",
    },
    {
      field: "CdBanco",
      label: "CdBanco",
      name: "CdBanco",
      typeField: "int",
    },
    {
      field: "CdAgencia",
      label: "CdAgencia",
      name: "CdAgencia",
      typeField: "int",
    },
    {
      field: "NumConta",
      label: "NumConta",
      name: "NumConta",
      typeField: "string",
    },
    {
      field: "NumCheque",
      label: "NumCheque",
      name: "NumCheque",
      typeField: "int",
    },
    {
      field: "FgSituacao",
      label: "FgSituacao",
      name: "FgSituacao",
      typeField: "string",
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "TpMovimentoBanco",
      label: "TpMovimentoBanco",
      name: "TpMovimentoBanco",
      typeField: "string",
    },
    {
      field: "NumLancamento",
      label: "NumLancamento",
      name: "NumLancamento",
      typeField: "int",
    },
    {
      field: "NumNota",
      label: "NumNota",
      name: "NumNota",
      typeField: "int",
    },
    {
      field: "CdTipoPagamento",
      label: "CdTipoPagamento",
      name: "CdTipoPagamento",
      typeField: "int",
    },
    {
      field: "CdFontePagamento",
      label: "CdFontePagamento",
      name: "CdFontePagamento",
      typeField: "int",
    },
    {
      field: "DtLancamento",
      label: "DtLancamento",
      name: "DtLancamento",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "Modelo",
      label: "Modelo",
      name: "Modelo",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "NumAuxiliar",
      label: "NumAuxiliar",
      name: "NumAuxiliar",
      typeField: "string",
    },
    {
      field: "VlAmortizado",
      label: "VlAmortizado",
      name: "VlAmortizado",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "PercJuroDiario",
      label: "PercJuroDiario",
      name: "PercJuroDiario",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlMultaAtraso",
      label: "VlMultaAtraso",
      name: "VlMultaAtraso",
      typeField: "float",

      scale: 4,
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
      field: "VlDeducao",
      label: "VlDeducao",
      name: "VlDeducao",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlAcrescimo",
      label: "VlAcrescimo",
      name: "VlAcrescimo",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlJurosPago",
      label: "VlJurosPago",
      name: "VlJurosPago",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "ObsDocumento",
      label: "ObsDocumento",
      name: "ObsDocumento",
      typeField: "string",
    },
    {
      field: "FgTipoCustoDRE",
      label: "FgTipoCustoDRE",
      name: "FgTipoCustoDRE",
      typeField: "string",

      allowNull: false,
    },
  ],
};
