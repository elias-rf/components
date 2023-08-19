import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Controle02 extends ModelBase {
  static tableName = "Controle02";
  static idColumn = [];

  CNPJEmitente!: number;
  NumeroDav!: number;
  Sequencia!: number;
  DtEmissao!: Date;
  CdProduto!: string;
  DescricaoProduto!: string;
  Quantidade!: number;
  Unidade!: string;
  VlUnitario!: number;
  VlDescontoItem!: number;
  VlAcrescimoItem!: number;
  VlTotalItem!: number;
  SituacaoTributaria!: string;
  AliquotaICMS!: number;
  FgIndicadorCancelamento!: string;
  CasasDecimaisQtde!: number;
  CasasDecimaisValor!: number;
  FgPreVenda!: string;
  CdFilial!: number;
  

  static getFields() {
    return [
      "CNPJEmitente",
      "NumeroDav",
      "Sequencia",
      "DtEmissao",
      "CdProduto",
      "DescricaoProduto",
      "Quantidade",
      "Unidade",
      "VlUnitario",
      "VlDescontoItem",
      "VlAcrescimoItem",
      "VlTotalItem",
      "SituacaoTributaria",
      "AliquotaICMS",
      "FgIndicadorCancelamento",
      "CasasDecimaisQtde",
      "CasasDecimaisValor",
      "FgPreVenda",
      "CdFilial",
      ];
  }
}

Controle02.knex(connections.plano);

export type TControle02 = ModelObject<Controle02>;
