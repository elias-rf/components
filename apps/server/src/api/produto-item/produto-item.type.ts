export type TProdutoItemId = {
  produto_item_id: number;
}

export type TProdutoItemBase = {
  NomeProdutoItem?: string;
  fkProduto?: number;
  QtdMinima?: number;
  QtdAtual?: number;
  QtdMaxima?: number;
  QtdSeguranca?: number;
  ConsumoMedioMes?: number;
  ValorVenda?: number;
  ValorVendaDolar?: number;
  ValorCompra?: number;
  fkMoedaCompra?: number;
  IdVisiontech?: string;
  ForaDeLinha?: number;
  GrupoCredito?: string;
  fkProdutoItemAssociado?: number;
  AvisoEstoqueMinMax?: number;
}

 export type TProdutoItem = Partial<TProdutoItemId | TProdutoItemBase>