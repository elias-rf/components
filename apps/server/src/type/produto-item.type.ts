export type TProdutoItem = {
  produto_item_id?: number;
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