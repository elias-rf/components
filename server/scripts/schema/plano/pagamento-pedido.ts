import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class PagamentoPedido extends ModelBase {
  static tableName = "PagamentoPedido";
  static idColumn = [];

  CdAgencia!: number;
  CdBanco!: number;
  CdClienteAssociado!: number;
  CdFilial!: number;
  DtVencimento!: Date;
  ItemDoc!: number;
  NmCartao!: string;
  NumCheque!: number;
  NumConta!: string;
  NumPedido!: number;
  ParcelasCartao!: number;
  Prazo!: number;
  SiglaDoc!: string;
  Taxa!: number;
  VlCorrecao!: number;
  VlPrincipal!: number;
  CdFuncionario!: number;
  NmFuncionario!: string;
  CdCondPagto!: number;
  FgCobrancaBancaria!: string;
  

  static getFields() {
    return [
      "CdAgencia",
      "CdBanco",
      "CdClienteAssociado",
      "CdFilial",
      "DtVencimento",
      "ItemDoc",
      "NmCartao",
      "NumCheque",
      "NumConta",
      "NumPedido",
      "ParcelasCartao",
      "Prazo",
      "SiglaDoc",
      "Taxa",
      "VlCorrecao",
      "VlPrincipal",
      "CdFuncionario",
      "NmFuncionario",
      "CdCondPagto",
      "FgCobrancaBancaria",
      ];
  }
}

PagamentoPedido.knex(connections.plano);

export type TPagamentoPedido = ModelObject<PagamentoPedido>;
