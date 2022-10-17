export type TProdutoControleId = {
  CdLote?: string;
  CdProduto?: string;
  CdFornecedor?: number;
};

export type TProdutoControleBase = {
  CdNRA?: string;
  DtFabricacao?: string;
  DtValidade?: string;
  DtAnalise?: string;
  Aspecto?: string;
  FatorCorrecao?: number;
  Densidade?: number;
  PercentualDiluicao?: number;
  SituacaoLote?: string;
  SerieNfEntrada?: string;
  QtdeAdquirida?: number;
  NumNfEntrada?: number;
  SaldoPeso?: number;
  DtEntrada?: string;
  DtLimiteUso?: string;
  TipoLote?: string;
  IdReduzido?: number;
  CdFilial?: number;
  Modelo?: string;
  NumLote?: string;
};

export type TProdutoControle = Partial<
  TProdutoControleId | TProdutoControleBase
>;
