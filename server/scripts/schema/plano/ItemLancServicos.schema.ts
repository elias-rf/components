import { TEntity } from "@er/types/*";

export const ItemLancServicos: TEntity =
  {
  "database": "plano",
  "table": "ItemLancServicos",
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
      "field": "SubSerie",
      "label": "SubSerie",
      "name": "SubSerie",
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
      "field": "Sequencia",
      "label": "Sequencia",
      "name": "Sequencia",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "Quantidade",
      "label": "Quantidade",
      "name": "Quantidade",
      "type": "int",
      "size": 9,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "CdClasse",
      "label": "CdClasse",
      "name": "CdClasse",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "Unidade",
      "label": "Unidade",
      "name": "Unidade",
      "type": "string",
      "size": 3,
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
      "field": "PisBasCalc",
      "label": "PisBasCalc",
      "name": "PisBasCalc",
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
      "field": "AliquotaPIS",
      "label": "AliquotaPIS",
      "name": "AliquotaPIS",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "AliquotaCOFINS",
      "label": "AliquotaCOFINS",
      "name": "AliquotaCOFINS",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlBaseICMSItem",
      "label": "VlBaseICMSItem",
      "name": "VlBaseICMSItem",
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
      "field": "VlIcmsItem",
      "label": "VlIcmsItem",
      "name": "VlIcmsItem",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlBaseIcmsUF",
      "label": "VlBaseIcmsUF",
      "name": "VlBaseIcmsUF",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlIcmsUF",
      "label": "VlIcmsUF",
      "name": "VlIcmsUF",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlBaseIcmsItemST",
      "label": "VlBaseIcmsItemST",
      "name": "VlBaseIcmsItemST",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "AliquotaST",
      "label": "AliquotaST",
      "name": "AliquotaST",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlICMSSTItem",
      "label": "VlICMSSTItem",
      "name": "VlICMSSTItem",
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
      "type": "int",
      "size": 9
    }
  ]
}
