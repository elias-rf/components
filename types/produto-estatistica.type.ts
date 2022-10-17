export type TProdutoEstatisticaId = {
  CdEmpresa?: number;
  AnoRef?: number;
  MesRef?: number;
  CdProduto?: string;
};

export type TProdutoEstatisticaBase = {
  EstInicial?: number;
  Entradas?: number;
  Saidas?: number;
  Ajustes?: number;
  QtdCompras?: number;
  QtdMedio?: number;
  QtdVendas?: number;
  VlCusto?: number;
  VlMedio?: number;
  VlVendas?: number;
  VlCustoMedio?: number;
  VlVenda?: number;
  VlAtacado?: number;
  EstInicialPsico?: number;
};

export type TProdutoEstatistica = Partial<
  TProdutoEstatisticaId | TProdutoEstatisticaBase
>;
