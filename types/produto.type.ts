export type TProdutoId = {
  tbl_Produto_id: number;
}

export type TProdutoBase = {
  fkCategoria?: string;
  NomeComercial?: string;
  NomeInternacional?: string;
  BarCode?: number;
  Fabricante?: string;
  OBS?: string;
  DescricaoTecnica?: string;
  DescricaoGenerica?: string;
  CST?: number;
  Unidade?: string;
  GrupoCredito?: string;
  PesoBruto?: number;
  VlrMin?: number;
  Moeda?: number;
  NBM?: string;
  FOB?: number;
  Qtd?: number;
  Diametro?: string;
  DiametroTotal?: string;
  Furo?: number;
  Separacao?: number;
  PrazoAquisicao?: number;
  fkNCM?: number;
  fkUnidade?: number;
  ForaDeLinha?: number;
  Auditoria?: number;
  ItemEstoque?: number;
  fkLinhaDeProducao?: number;
  EsterilizacaoETO?: number;
  IsCatalogo?: number;
  ValorCusto?: number;
  TaxaIPI?: number;
  PRO_Ferrara?: number;
  fkSubCategoria?: number;
  CategoriaPREVISA?: string;
  OrigemCST?: number;
}

 export type TProduto = Partial<TProdutoId | TProdutoBase>