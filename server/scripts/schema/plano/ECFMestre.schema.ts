import { TEntity } from "@er/types/*";

export const ECFMestre: TEntity =
  {
  "database": "plano",
  "table": "ECFMestre",
  "fields": [
    {
      "field": "CNPJFilial",
      "label": "CNPJFilial",
      "name": "CNPJFilial",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "NumECF",
      "label": "NumECF",
      "name": "NumECF",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "DtBase",
      "label": "DtBase",
      "name": "DtBase",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "COOInicial",
      "label": "COOInicial",
      "name": "COOInicial",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "COOFinal",
      "label": "COOFinal",
      "name": "COOFinal",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "NumReducaoZ",
      "label": "NumReducaoZ",
      "name": "NumReducaoZ",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "ContadorReinicio",
      "label": "ContadorReinicio",
      "name": "ContadorReinicio",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlVendaBruta",
      "label": "VlVendaBruta",
      "name": "VlVendaBruta",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlTotalizador",
      "label": "VlTotalizador",
      "name": "VlTotalizador",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "NumSerie",
      "label": "NumSerie",
      "name": "NumSerie",
      "type": "string",
      "size": 32,
      "allowNull": false
    },
    {
      "field": "TipoReducao",
      "label": "TipoReducao",
      "name": "TipoReducao",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "NumCOOReducao",
      "label": "NumCOOReducao",
      "name": "NumCOOReducao",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "DtEmissaoReducao",
      "label": "DtEmissaoReducao",
      "name": "DtEmissaoReducao",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "HrEmissaoReducao",
      "label": "HrEmissaoReducao",
      "name": "HrEmissaoReducao",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "NumUsuario",
      "label": "NumUsuario",
      "name": "NumUsuario",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "ParamDescISS",
      "label": "ParamDescISS",
      "name": "ParamDescISS",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "VlGrandeTotal",
      "label": "VlGrandeTotal",
      "name": "VlGrandeTotal",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlNaoFiscal",
      "label": "VlNaoFiscal",
      "name": "VlNaoFiscal",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlAcrescimo",
      "label": "VlAcrescimo",
      "name": "VlAcrescimo",
      "type": "float",
      "size": 8,
      "scale": 4
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
      "field": "ControleFilial",
      "label": "ControleFilial",
      "name": "ControleFilial",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "ControleECF",
      "label": "ControleECF",
      "name": "ControleECF",
      "type": "int",
      "size": 2
    },
    {
      "field": "ControleSerie",
      "label": "ControleSerie",
      "name": "ControleSerie",
      "type": "string",
      "size": 32
    },
    {
      "field": "ControleData",
      "label": "ControleData",
      "name": "ControleData",
      "type": "datetime",
      "size": 8,
      "scale": 3
    }
  ]
}
