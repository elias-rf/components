export type TFornecedorId = {
  fornecedor_id: number;
}

export type TFornecedorBase = {
  razao_social?: string;
  nome_fantasia?: string;
  cidade?: string;
  uf?: string;
  pais_id?: number;
  cnpj?: string;
  inscricao_estadual?: string;
  is_ativo?: string;
}

 export type TFornecedor = Partial<TFornecedorId | TFornecedorBase>