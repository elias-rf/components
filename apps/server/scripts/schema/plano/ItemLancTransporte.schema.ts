import { TEntity } from "@er/types/*";

export const ItemLancTransporte: TEntity =
  {
  "database": "plano",
  "table": "ItemLancTransporte",
  "fields": [
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "CdFilial",
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
      "field": "Serie",
      "label": "Serie",
      "name": "Serie",
      "type": "string",
      "size": 3,
      "allowNull": false
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
      "field": "CdFornecedor",
      "label": "CdFornecedor",
      "name": "CdFornecedor",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "CdServico",
      "label": "CdServico",
      "name": "CdServico",
      "type": "string",
      "size": 16,
      "allowNull": false
    },
    {
      "field": "NopItem",
      "label": "NopItem",
      "name": "NopItem",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "VlUnitario",
      "label": "VlUnitario",
      "name": "VlUnitario",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlDescItem",
      "label": "VlDescItem",
      "name": "VlDescItem",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlLiquidoUnit",
      "label": "VlLiquidoUnit",
      "name": "VlLiquidoUnit",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "Origem",
      "label": "Origem",
      "name": "Origem",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "CdCSTICMS",
      "label": "CdCSTICMS",
      "name": "CdCSTICMS",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "CdCSTPIS",
      "label": "CdCSTPIS",
      "name": "CdCSTPIS",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "CdCSTCOFINS",
      "label": "CdCSTCOFINS",
      "name": "CdCSTCOFINS",
      "type": "int",
      "size": 2,
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
      "field": "AliquotaICMS",
      "label": "AliquotaICMS",
      "name": "AliquotaICMS",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlIcms",
      "label": "VlIcms",
      "name": "VlIcms",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "PISBasCalc",
      "label": "PISBasCalc",
      "name": "PISBasCalc",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "AliquotaPIS",
      "label": "AliquotaPIS",
      "name": "AliquotaPIS",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlPIS",
      "label": "VlPIS",
      "name": "VlPIS",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "CofinsBasCalc",
      "label": "CofinsBasCalc",
      "name": "CofinsBasCalc",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "AliquotaCofins",
      "label": "AliquotaCofins",
      "name": "AliquotaCofins",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlCofins",
      "label": "VlCofins",
      "name": "VlCofins",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "Classif",
      "label": "Classif",
      "name": "Classif",
      "type": "string",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "TipoTributacao",
      "label": "TipoTributacao",
      "name": "TipoTributacao",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "PlanoContaSped",
      "label": "PlanoContaSped",
      "name": "PlanoContaSped",
      "type": "float",
      "size": 8,
      "scale": 4
    }
  ]
}