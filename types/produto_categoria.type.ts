export type TProdutoCategoriaId = {
  CategPro_id: string;
}

export type TProdutoCategoriaBase = {
  NmCategoria?: string;
  CdDepartamento?: number;
  FgListaPreco?: string;
  DtUltAlteracao?: string;
  Mensagem?: string;
  PercDescMaxGerente?: number;
  PercDescMaxVendedor?: number;
}

 export type TProdutoCategoria = Partial<TProdutoCategoriaId | TProdutoCategoriaBase>