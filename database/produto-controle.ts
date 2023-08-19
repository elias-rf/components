import { connections } from "@/config/connections";
import { ModelBase } from "@/database/utils/model-base";
import { ModelObject } from "objection";

export class ProdutoControle extends ModelBase {
  static tableName = "Lotes";
  static idColumn = ["CdLote", "CdProduto", "CdFornecedor"];

  CdLote!: string;
  CdProduto!: string;
  CdFornecedor!: number;
  CdNRA!: string;
  DtFabricacao!: Date;
  DtValidade!: Date;
  DtAnalise!: Date;
  Aspecto!: string;
  FatorCorrecao!: number;
  Densidade!: number;
  PercentualDiluicao!: number;
  SituacaoLote!: string;
  SerieNfEntrada!: string;
  QtdeAdquirida!: number;
  NumNfEntrada!: number;
  SaldoPeso!: number;
  DtEntrada!: Date;
  DtLimiteUso!: Date;
  TipoLote!: string;
  IdReduzido!: number;
  CdFilial!: number;
  Modelo!: string;
  NumLote!: string;

  static getFields() {
    return [
      "CdLote",
      "CdProduto",
      "CdFornecedor",
      "CdNRA",
      "DtFabricacao",
      "DtValidade",
      "DtAnalise",
      "Aspecto",
      "FatorCorrecao",
      "Densidade",
      "PercentualDiluicao",
      "SituacaoLote",
      "SerieNfEntrada",
      "QtdeAdquirida",
      "NumNfEntrada",
      "SaldoPeso",
      "DtEntrada",
      "DtLimiteUso",
      "TipoLote",
      "IdReduzido",
      "CdFilial",
      "Modelo",
      "NumLote",
    ];
  }
}

ProdutoControle.knex(connections.plano);

export type TProdutoControle = ModelObject<ProdutoControle>;
