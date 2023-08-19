import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Controle12 extends ModelBase {
  static tableName = "Controle12";
  static idColumn = [];

  CNPJEmitente!: number;
  NumeroDav!: number;
  Sequencia!: number;
  DtAlteracao!: Date;
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
  TipoAlteracao!: string;
  

  static getFields() {
    return [
      "CNPJEmitente",
      "NumeroDav",
      "Sequencia",
      "DtAlteracao",
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
      "TipoAlteracao",
      ];
  }
}

Controle12.knex(connections.plano);

export type TControle12 = ModelObject<Controle12>;
