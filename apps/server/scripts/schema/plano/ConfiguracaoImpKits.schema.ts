import { TEntity } from "@er/types/*";

export const ConfiguracaoImpKits: TEntity =
  {
  "database": "plano",
  "table": "ConfiguracaoImpKits",
  "fields": [
    {
      "field": "CdKit",
      "label": "CdKit",
      "name": "ConfiguracaoImpKits_id",
      "type": "string",
      "size": 15,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "NumOP",
      "label": "NumOP",
      "name": "NumOP",
      "type": "string",
      "size": 64,
      "allowNull": false
    },
    {
      "field": "ProdutoProduzido",
      "label": "ProdutoProduzido",
      "name": "ProdutoProduzido",
      "type": "string",
      "size": 64,
      "allowNull": false
    },
    {
      "field": "LoteProdutoProduzido",
      "label": "LoteProdutoProduzido",
      "name": "LoteProdutoProduzido",
      "type": "string",
      "size": 64,
      "allowNull": false
    },
    {
      "field": "QtdeProdutoProduzido",
      "label": "QtdeProdutoProduzido",
      "name": "QtdeProdutoProduzido",
      "type": "string",
      "size": 64,
      "allowNull": false
    },
    {
      "field": "LoteGrelhaProduzida",
      "label": "LoteGrelhaProduzida",
      "name": "LoteGrelhaProduzida",
      "type": "string",
      "size": 64,
      "allowNull": false
    },
    {
      "field": "QtdeGrelhaProduzida",
      "label": "QtdeGrelhaProduzida",
      "name": "QtdeGrelhaProduzida",
      "type": "string",
      "size": 64,
      "allowNull": false
    },
    {
      "field": "Largura",
      "label": "Largura",
      "name": "Largura",
      "type": "string",
      "size": 64,
      "allowNull": false
    },
    {
      "field": "Espessura",
      "label": "Espessura",
      "name": "Espessura",
      "type": "string",
      "size": 64,
      "allowNull": false
    },
    {
      "field": "DescMateriaPrima",
      "label": "DescMateriaPrima",
      "name": "DescMateriaPrima",
      "type": "string",
      "size": 128,
      "allowNull": false
    },
    {
      "field": "QtdeMateriaPrima",
      "label": "QtdeMateriaPrima",
      "name": "QtdeMateriaPrima",
      "type": "string",
      "size": 128,
      "allowNull": false
    },
    {
      "field": "LoteMateriaPrima",
      "label": "LoteMateriaPrima",
      "name": "LoteMateriaPrima",
      "type": "string",
      "size": 128,
      "allowNull": false
    },
    {
      "field": "MaquinaProducao",
      "label": "MaquinaProducao",
      "name": "MaquinaProducao",
      "type": "string",
      "size": 64,
      "allowNull": false
    },
    {
      "field": "DtFabricacao",
      "label": "DtFabricacao",
      "name": "DtFabricacao",
      "type": "string",
      "size": 64,
      "allowNull": false
    },
    {
      "field": "OperadorMaquina",
      "label": "OperadorMaquina",
      "name": "OperadorMaquina",
      "type": "string",
      "size": 64,
      "allowNull": false
    },
    {
      "field": "TipoCaixa",
      "label": "TipoCaixa",
      "name": "TipoCaixa",
      "type": "string",
      "size": 64,
      "allowNull": false
    },
    {
      "field": "PecaCaixa",
      "label": "PecaCaixa",
      "name": "PecaCaixa",
      "type": "string",
      "size": 64,
      "allowNull": false
    },
    {
      "field": "LoteCaixa",
      "label": "LoteCaixa",
      "name": "LoteCaixa",
      "type": "string",
      "size": 64,
      "allowNull": false
    },
    {
      "field": "DtExtrusao",
      "label": "DtExtrusao",
      "name": "DtExtrusao",
      "type": "string",
      "size": 64,
      "allowNull": false
    },
    {
      "field": "CdProdutoProduzido",
      "label": "CdProdutoProduzido",
      "name": "CdProdutoProduzido",
      "type": "string",
      "size": 64
    },
    {
      "field": "CdMateriaPrima",
      "label": "CdMateriaPrima",
      "name": "CdMateriaPrima",
      "type": "string",
      "size": 64
    },
    {
      "field": "Cliente",
      "label": "Cliente",
      "name": "Cliente",
      "type": "string",
      "size": 64
    },
    {
      "field": "PostoProdutivo1",
      "label": "PostoProdutivo1",
      "name": "PostoProdutivo1",
      "type": "string",
      "size": 64
    },
    {
      "field": "PostoProdutivo2",
      "label": "PostoProdutivo2",
      "name": "PostoProdutivo2",
      "type": "string",
      "size": 64
    },
    {
      "field": "PostoProdutivo3",
      "label": "PostoProdutivo3",
      "name": "PostoProdutivo3",
      "type": "string",
      "size": 64
    },
    {
      "field": "PostoProdutivo4",
      "label": "PostoProdutivo4",
      "name": "PostoProdutivo4",
      "type": "string",
      "size": 64
    },
    {
      "field": "PostoProdutivo5",
      "label": "PostoProdutivo5",
      "name": "PostoProdutivo5",
      "type": "string",
      "size": 64
    },
    {
      "field": "PostoProdutivo6",
      "label": "PostoProdutivo6",
      "name": "PostoProdutivo6",
      "type": "string",
      "size": 64
    },
    {
      "field": "DescOperacao1",
      "label": "DescOperacao1",
      "name": "DescOperacao1",
      "type": "string",
      "size": 64
    },
    {
      "field": "DescOperacao2",
      "label": "DescOperacao2",
      "name": "DescOperacao2",
      "type": "string",
      "size": 64
    },
    {
      "field": "DescOperacao3",
      "label": "DescOperacao3",
      "name": "DescOperacao3",
      "type": "string",
      "size": 64
    },
    {
      "field": "DescOperacao4",
      "label": "DescOperacao4",
      "name": "DescOperacao4",
      "type": "string",
      "size": 64
    },
    {
      "field": "DescOperacao5",
      "label": "DescOperacao5",
      "name": "DescOperacao5",
      "type": "string",
      "size": 64
    },
    {
      "field": "DescOperacao6",
      "label": "DescOperacao6",
      "name": "DescOperacao6",
      "type": "string",
      "size": 64
    },
    {
      "field": "DtEmissao",
      "label": "DtEmissao",
      "name": "DtEmissao",
      "type": "string",
      "size": 64
    },
    {
      "field": "Obs",
      "label": "Obs",
      "name": "Obs",
      "type": "string",
      "size": 64
    }
  ]
}
