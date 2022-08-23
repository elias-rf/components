import { TEntity } from "@er/types/*";

export const ExcNM: TEntity =
  {
  "database": "plano",
  "table": "ExcNM",
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
      "field": "NroNf",
      "label": "NroNf",
      "name": "NroNf",
      "type": "int",
      "size": 4,
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
      "field": "CdFornecedor",
      "label": "CdFornecedor",
      "name": "CdFornecedor",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "Nop",
      "label": "Nop",
      "name": "Nop",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "DtEmi",
      "label": "DtEmi",
      "name": "DtEmi",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "DtEntr",
      "label": "DtEntr",
      "name": "DtEntr",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "TotNf",
      "label": "TotNf",
      "name": "TotNf",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "BaseSubstituicao",
      "label": "BaseSubstituicao",
      "name": "BaseSubstituicao",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "IPIBasCalc",
      "label": "IPIBasCalc",
      "name": "IPIBasCalc",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "IPIVlr",
      "label": "IPIVlr",
      "name": "IPIVlr",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "IPIFrete",
      "label": "IPIFrete",
      "name": "IPIFrete",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "ICMSAliq",
      "label": "ICMSAliq",
      "name": "ICMSAliq",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "ICMSBasCalc",
      "label": "ICMSBasCalc",
      "name": "ICMSBasCalc",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "ICMSVlr",
      "label": "ICMSVlr",
      "name": "ICMSVlr",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "ICMSRetido",
      "label": "ICMSRetido",
      "name": "ICMSRetido",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "ICMSOperPropria",
      "label": "ICMSOperPropria",
      "name": "ICMSOperPropria",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "ICMSFrete",
      "label": "ICMSFrete",
      "name": "ICMSFrete",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "Frete",
      "label": "Frete",
      "name": "Frete",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "Seguro",
      "label": "Seguro",
      "name": "Seguro",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "DtValidacao",
      "label": "DtValidacao",
      "name": "DtValidacao",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "VlMercadorias",
      "label": "VlMercadorias",
      "name": "VlMercadorias",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "ConPag",
      "label": "ConPag",
      "name": "ConPag",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "Tipo",
      "label": "Tipo",
      "name": "Tipo",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "FgIPICompoeBase",
      "label": "FgIPICompoeBase",
      "name": "FgIPICompoeBase",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "Horario",
      "label": "Horario",
      "name": "Horario",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "VlNfComplementar",
      "label": "VlNfComplementar",
      "name": "VlNfComplementar",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "FgIPICompoeBaseSub",
      "label": "FgIPICompoeBaseSub",
      "name": "FgIPICompoeBaseSub",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "FgEstoque",
      "label": "FgEstoque",
      "name": "FgEstoque",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "IdParametro",
      "label": "IdParametro",
      "name": "IdParametro",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "Modelo",
      "label": "Modelo",
      "name": "Modelo",
      "type": "string",
      "size": 3,
      "allowNull": false
    }
  ]
}
