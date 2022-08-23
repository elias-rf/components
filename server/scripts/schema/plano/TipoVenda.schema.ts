import { TEntity } from "@er/types/*";

export const TipoVenda: TEntity =
  {
  "database": "plano",
  "table": "TipoVenda",
  "fields": [
    {
      "field": "CdTipoVenda",
      "label": "CdTipoVenda",
      "name": "TipoVenda_id",
      "type": "int",
      "size": 4,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "Descricao",
      "label": "Descricao",
      "name": "Descricao",
      "type": "string",
      "size": 25
    },
    {
      "field": "Dinheiro",
      "label": "Dinheiro",
      "name": "Dinheiro",
      "type": "string",
      "size": 1
    },
    {
      "field": "Cheque",
      "label": "Cheque",
      "name": "Cheque",
      "type": "string",
      "size": 1
    },
    {
      "field": "Cartao",
      "label": "Cartao",
      "name": "Cartao",
      "type": "string",
      "size": 1
    },
    {
      "field": "PreDatado",
      "label": "PreDatado",
      "name": "PreDatado",
      "type": "string",
      "size": 1
    },
    {
      "field": "Debito",
      "label": "Debito",
      "name": "Debito",
      "type": "string",
      "size": 1
    },
    {
      "field": "Acrescimo",
      "label": "Acrescimo",
      "name": "Acrescimo",
      "type": "string",
      "size": 1
    },
    {
      "field": "Faturamento",
      "label": "Faturamento",
      "name": "Faturamento",
      "type": "string",
      "size": 1
    },
    {
      "field": "Percentual",
      "label": "Percentual",
      "name": "Percentual",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "PercVenda",
      "label": "PercVenda",
      "name": "PercVenda",
      "type": "string",
      "size": 1
    },
    {
      "field": "Ticket",
      "label": "Ticket",
      "name": "Ticket",
      "type": "string",
      "size": 1
    },
    {
      "field": "TrocoCheque",
      "label": "TrocoCheque",
      "name": "TrocoCheque",
      "type": "string",
      "size": 1
    },
    {
      "field": "TrocoTicket",
      "label": "TrocoTicket",
      "name": "TrocoTicket",
      "type": "string",
      "size": 1
    },
    {
      "field": "Desconto",
      "label": "Desconto",
      "name": "Desconto",
      "type": "string",
      "size": 1
    },
    {
      "field": "ExibeDevolucao",
      "label": "ExibeDevolucao",
      "name": "ExibeDevolucao",
      "type": "string",
      "size": 1
    },
    {
      "field": "TextoCliente",
      "label": "TextoCliente",
      "name": "TextoCliente",
      "type": "string",
      "size": 20
    },
    {
      "field": "ComprovanteCre",
      "label": "ComprovanteCre",
      "name": "ComprovanteCre",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgRecalculaDesconto",
      "label": "FgRecalculaDesconto",
      "name": "FgRecalculaDesconto",
      "type": "string",
      "size": 1
    },
    {
      "field": "TipoPreco",
      "label": "TipoPreco",
      "name": "TipoPreco",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgEstatistica",
      "label": "FgEstatistica",
      "name": "FgEstatistica",
      "type": "string",
      "size": 1
    },
    {
      "field": "ReembolsoPostal",
      "label": "ReembolsoPostal",
      "name": "ReembolsoPostal",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgAceitaEmissaoCupom",
      "label": "FgAceitaEmissaoCupom",
      "name": "FgAceitaEmissaoCupom",
      "type": "string",
      "size": 1
    },
    {
      "field": "TipoOperacao",
      "label": "TipoOperacao",
      "name": "TipoOperacao",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "UtilizacaoCreditoCliente",
      "label": "UtilizacaoCreditoCliente",
      "name": "UtilizacaoCreditoCliente",
      "type": "string",
      "size": 1
    },
    {
      "field": "Financiamento",
      "label": "Financiamento",
      "name": "Financiamento",
      "type": "string",
      "size": 1
    },
    {
      "field": "DepositoBancario",
      "label": "DepositoBancario",
      "name": "DepositoBancario",
      "type": "string",
      "size": 1
    },
    {
      "field": "Bonificacao",
      "label": "Bonificacao",
      "name": "Bonificacao",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgReceberNoLocal",
      "label": "FgReceberNoLocal",
      "name": "FgReceberNoLocal",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgAtivo",
      "label": "FgAtivo",
      "name": "FgAtivo",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgImprimirCarne",
      "label": "FgImprimirCarne",
      "name": "FgImprimirCarne",
      "type": "string",
      "size": 1
    }
  ]
}
