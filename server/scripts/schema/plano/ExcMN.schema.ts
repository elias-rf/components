import { TEntity } from "@er/types/*";

export const ExcMN: TEntity =
  {
  "database": "plano",
  "table": "ExcMN",
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
      "field": "NumNota",
      "label": "NumNota",
      "name": "NumNota",
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
      "field": "DtEmissao",
      "label": "DtEmissao",
      "name": "DtEmissao",
      "type": "datetime",
      "size": 8,
      "scale": 3,
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
      "field": "Nop",
      "label": "Nop",
      "name": "Nop",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "FgEstatistica",
      "label": "FgEstatistica",
      "name": "FgEstatistica",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "fgEstoque",
      "label": "fgEstoque",
      "name": "fgEstoque",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "VlBaseCalculo",
      "label": "VlBaseCalculo",
      "name": "VlBaseCalculo",
      "type": "float",
      "size": 8,
      "scale": 4,
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
      "field": "CdCliente",
      "label": "CdCliente",
      "name": "CdCliente",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "CdVendedor",
      "label": "CdVendedor",
      "name": "CdVendedor",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "PercComissao",
      "label": "PercComissao",
      "name": "PercComissao",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlTotal",
      "label": "VlTotal",
      "name": "VlTotal",
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
      "field": "IcmsSubstituicao",
      "label": "IcmsSubstituicao",
      "name": "IcmsSubstituicao",
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
      "field": "VlIrrf",
      "label": "VlIrrf",
      "name": "VlIrrf",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlIss",
      "label": "VlIss",
      "name": "VlIss",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlProdutos",
      "label": "VlProdutos",
      "name": "VlProdutos",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlFrete",
      "label": "VlFrete",
      "name": "VlFrete",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlSeguro",
      "label": "VlSeguro",
      "name": "VlSeguro",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlAcessorias",
      "label": "VlAcessorias",
      "name": "VlAcessorias",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlIpi",
      "label": "VlIpi",
      "name": "VlIpi",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlServico",
      "label": "VlServico",
      "name": "VlServico",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlDesconto",
      "label": "VlDesconto",
      "name": "VlDesconto",
      "type": "float",
      "size": 8,
      "scale": 4,
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
