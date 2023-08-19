import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TipoVenda extends ModelBase {
  static tableName = "TipoVenda";
  static idColumn = ["CdTipoVenda"];

  CdTipoVenda!: number;
  Descricao!: string;
  Dinheiro!: string;
  Cheque!: string;
  Cartao!: string;
  PreDatado!: string;
  Debito!: string;
  Acrescimo!: string;
  Faturamento!: string;
  Percentual!: number;
  PercVenda!: string;
  Ticket!: string;
  TrocoCheque!: string;
  TrocoTicket!: string;
  Desconto!: string;
  ExibeDevolucao!: string;
  TextoCliente!: string;
  ComprovanteCre!: string;
  FgRecalculaDesconto!: string;
  TipoPreco!: string;
  FgEstatistica!: string;
  ReembolsoPostal!: string;
  FgAceitaEmissaoCupom!: string;
  TipoOperacao!: string;
  UtilizacaoCreditoCliente!: string;
  Financiamento!: string;
  DepositoBancario!: string;
  Bonificacao!: string;
  FgReceberNoLocal!: string;
  FgAtivo!: string;
  FgImprimirCarne!: string;
  PIX!: string;
  

  static getFields() {
    return [
      "CdTipoVenda",
      "Descricao",
      "Dinheiro",
      "Cheque",
      "Cartao",
      "PreDatado",
      "Debito",
      "Acrescimo",
      "Faturamento",
      "Percentual",
      "PercVenda",
      "Ticket",
      "TrocoCheque",
      "TrocoTicket",
      "Desconto",
      "ExibeDevolucao",
      "TextoCliente",
      "ComprovanteCre",
      "FgRecalculaDesconto",
      "TipoPreco",
      "FgEstatistica",
      "ReembolsoPostal",
      "FgAceitaEmissaoCupom",
      "TipoOperacao",
      "UtilizacaoCreditoCliente",
      "Financiamento",
      "DepositoBancario",
      "Bonificacao",
      "FgReceberNoLocal",
      "FgAtivo",
      "FgImprimirCarne",
      "PIX",
      ];
  }
}

TipoVenda.knex(connections.plano);

export type TTipoVenda = ModelObject<TipoVenda>;
