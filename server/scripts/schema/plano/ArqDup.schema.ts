import { TEntity } from "@er/types/*";

export const ArqDup: TEntity =
  {
  "database": "plano",
  "table": "ArqDup",
  "fields": [
    {
      "field": "CdEmpresa",
      "label": "CdEmpresa",
      "name": "CdEmpresa",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "NumDoc",
      "label": "NumDoc",
      "name": "NumDoc",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "CodFor",
      "label": "CodFor",
      "name": "CodFor",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "SeqDoc",
      "label": "SeqDoc",
      "name": "SeqDoc",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "Serie",
      "label": "Serie",
      "name": "Serie",
      "type": "string",
      "size": 3,
      "allowNull": false
    },
    {
      "field": "DatEmi",
      "label": "DatEmi",
      "name": "DatEmi",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "DatVen",
      "label": "DatVen",
      "name": "DatVen",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "DatPag",
      "label": "DatPag",
      "name": "DatPag",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "TipInd",
      "label": "TipInd",
      "name": "TipInd",
      "type": "string",
      "size": 1
    },
    {
      "field": "Aceite",
      "label": "Aceite",
      "name": "Aceite",
      "type": "string",
      "size": 1
    },
    {
      "field": "NumFat",
      "label": "NumFat",
      "name": "NumFat",
      "type": "int",
      "size": 4
    },
    {
      "field": "CdBanco",
      "label": "CdBanco",
      "name": "CdBanco",
      "type": "int",
      "size": 4
    },
    {
      "field": "CdAgencia",
      "label": "CdAgencia",
      "name": "CdAgencia",
      "type": "int",
      "size": 4
    },
    {
      "field": "NumConta",
      "label": "NumConta",
      "name": "NumConta",
      "type": "string",
      "size": 12
    },
    {
      "field": "NumCheque",
      "label": "NumCheque",
      "name": "NumCheque",
      "type": "int",
      "size": 4
    },
    {
      "field": "FgSituacao",
      "label": "FgSituacao",
      "name": "FgSituacao",
      "type": "string",
      "size": 1
    },
    {
      "field": "DtUltAlteracao",
      "label": "DtUltAlteracao",
      "name": "DtUltAlteracao",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "TpMovimentoBanco",
      "label": "TpMovimentoBanco",
      "name": "TpMovimentoBanco",
      "type": "string",
      "size": 1
    },
    {
      "field": "NumLancamento",
      "label": "NumLancamento",
      "name": "NumLancamento",
      "type": "int",
      "size": 4
    },
    {
      "field": "NumNota",
      "label": "NumNota",
      "name": "NumNota",
      "type": "int",
      "size": 4
    },
    {
      "field": "CdTipoPagamento",
      "label": "CdTipoPagamento",
      "name": "CdTipoPagamento",
      "type": "int",
      "size": 2
    },
    {
      "field": "CdFontePagamento",
      "label": "CdFontePagamento",
      "name": "CdFontePagamento",
      "type": "int",
      "size": 2
    },
    {
      "field": "DtLancamento",
      "label": "DtLancamento",
      "name": "DtLancamento",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "Modelo",
      "label": "Modelo",
      "name": "Modelo",
      "type": "string",
      "size": 3,
      "allowNull": false
    },
    {
      "field": "NumAuxiliar",
      "label": "NumAuxiliar",
      "name": "NumAuxiliar",
      "type": "string",
      "size": 32
    },
    {
      "field": "VlAmortizado",
      "label": "VlAmortizado",
      "name": "VlAmortizado",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "PercJuroDiario",
      "label": "PercJuroDiario",
      "name": "PercJuroDiario",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlMultaAtraso",
      "label": "VlMultaAtraso",
      "name": "VlMultaAtraso",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlDocumento",
      "label": "VlDocumento",
      "name": "VlDocumento",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlDeducao",
      "label": "VlDeducao",
      "name": "VlDeducao",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlAcrescimo",
      "label": "VlAcrescimo",
      "name": "VlAcrescimo",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlJurosPago",
      "label": "VlJurosPago",
      "name": "VlJurosPago",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "ObsDocumento",
      "label": "ObsDocumento",
      "name": "ObsDocumento",
      "type": "string",
      "size": 1024
    },
    {
      "field": "FgTipoCustoDRE",
      "label": "FgTipoCustoDRE",
      "name": "FgTipoCustoDRE",
      "type": "string",
      "size": 1,
      "allowNull": false
    }
  ]
}
