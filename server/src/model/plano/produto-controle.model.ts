import { Connections } from "../../dal/connections";
import { Model } from "../model";

export type ProdutoControleRecord = {
  Aspecto: string;
  CdFilial: number;
  CdFornecedor: number;
  CdLote: string;
  CdNRA: string;
  CdProduto: string;
  Densidade: number;
  DtAnalise: string;
  DtEntrada: string;
  DtFabricacao: string;
  DtLimiteUso: string;
  DtValidade: string;
  FatorCorrecao: number;
  Modelo: string;
  NumNfEntrada: string;
  PercentualDiluicao: number;
  QtdeAdquirida: number;
  SaldoPeso: number;
  SerieNfEntrada: string;
  SituacaoLote: string;
  TipoLote: string;
};

export class ProdutoControleModel extends Model<ProdutoControleRecord> {
  constructor(connections: Connections) {
    super(
      connections.plano,
      "produtoControle",
      "Lotes",
      ["CdFilial", "CdProduto", "CdLote"],
      [
        "Aspecto",
        "CdFilial",
        "CdFornecedor",
        "CdLote",
        "CdNRA",
        "CdProduto",
        "Densidade",
        "DtAnalise",
        "DtEntrada",
        "DtFabricacao",
        "DtLimiteUso",
        "DtValidade",
        "FatorCorrecao",
        "Modelo",
        "NumNfEntrada",
        "PercentualDiluicao",
        "QtdeAdquirida",
        "SaldoPeso",
        "SerieNfEntrada",
        "SituacaoLote",
        "TipoLote",
      ]
    );
  }
}
