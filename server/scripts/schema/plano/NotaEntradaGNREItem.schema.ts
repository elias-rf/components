import { TEntity } from "@er/types/*";

export const NotaEntradaGNREItem: TEntity =
  {
  "database": "plano",
  "table": "NotaEntradaGNREItem",
  "fields": [
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "CdFilial",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "NumNota",
      "label": "NumNota",
      "name": "NumNota",
      "type": "int",
      "size": 5,
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
      "field": "CdProduto",
      "label": "CdProduto",
      "name": "CdProduto",
      "type": "string",
      "size": 15,
      "allowNull": false
    },
    {
      "field": "ClassificacaoProduto",
      "label": "ClassificacaoProduto",
      "name": "ClassificacaoProduto",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "VlPMC",
      "label": "VlPMC",
      "name": "VlPMC",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "PercRedBaseSTPMC",
      "label": "PercRedBaseSTPMC",
      "name": "PercRedBaseSTPMC",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "PercMVA",
      "label": "PercMVA",
      "name": "PercMVA",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "PercRedBaseSTMVA",
      "label": "PercRedBaseSTMVA",
      "name": "PercRedBaseSTMVA",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "PercReducaoICMS",
      "label": "PercReducaoICMS",
      "name": "PercReducaoICMS",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlBaseCalculoICMS",
      "label": "VlBaseCalculoICMS",
      "name": "VlBaseCalculoICMS",
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
      "field": "VlICMS",
      "label": "VlICMS",
      "name": "VlICMS",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlBaseCalculoICMSSub",
      "label": "VlBaseCalculoICMSSub",
      "name": "VlBaseCalculoICMSSub",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "AliquotaICMSSub",
      "label": "AliquotaICMSSub",
      "name": "AliquotaICMSSub",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlICMSSub",
      "label": "VlICMSSub",
      "name": "VlICMSSub",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlICMSRecolher",
      "label": "VlICMSRecolher",
      "name": "VlICMSRecolher",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "DtUltAlteracao",
      "label": "DtUltAlteracao",
      "name": "DtUltAlteracao",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    }
  ]
}
