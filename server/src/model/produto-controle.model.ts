import { TConnections } from "../dal/connections";
import { EntityModel } from "./entity";

export type TProdutoControle = {
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

export class ProdutoControleModel extends EntityModel<TProdutoControle> {
  constructor(connections: TConnections) {
    super(connections, "produtoControle");
  }
}
