import { TEntity } from "@er/types/*";

export const ConfiguracaoAtualizacao: TEntity =
  {
  "database": "plano",
  "table": "ConfiguracaoAtualizacao",
  "fields": [
    {
      "field": "NumECF",
      "label": "NumECF",
      "name": "ConfiguracaoAtualizacao_id",
      "type": "int",
      "size": 2,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "Caminho",
      "label": "Caminho",
      "name": "Caminho",
      "type": "string",
      "size": 1024,
      "allowNull": false
    },
    {
      "field": "DtUltAtualizacao",
      "label": "DtUltAtualizacao",
      "name": "DtUltAtualizacao",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "NumUltLinhaMestre",
      "label": "NumUltLinhaMestre",
      "name": "NumUltLinhaMestre",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "NumUltLinhaItem",
      "label": "NumUltLinhaItem",
      "name": "NumUltLinhaItem",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "NumUltLinhaCaixa",
      "label": "NumUltLinhaCaixa",
      "name": "NumUltLinhaCaixa",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "NumUltLinhaFinanceiro",
      "label": "NumUltLinhaFinanceiro",
      "name": "NumUltLinhaFinanceiro",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "NumUltLinhaRecebimento",
      "label": "NumUltLinhaRecebimento",
      "name": "NumUltLinhaRecebimento",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "NumUltLinhaDocumentoNaoFiscal",
      "label": "NumUltLinhaDocumentoNaoFiscal",
      "name": "NumUltLinhaDocumentoNaoFiscal",
      "type": "int",
      "size": 2
    },
    {
      "field": "NumUltLinhaMeiosPagamento",
      "label": "NumUltLinhaMeiosPagamento",
      "name": "NumUltLinhaMeiosPagamento",
      "type": "int",
      "size": 2
    }
  ]
}
