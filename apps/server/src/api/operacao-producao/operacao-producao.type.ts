export type TOperacaoProducaoId = {
  tOperacaoDeProducao_id: number;
}

export type TOperacaoProducaoBase = {
  Operacao?: string;
  EhRetrabalho?: number;
  Especial?: number;
  Descricao?: string;
  Amostragem?: number;
}

 export type TOperacaoProducao = Partial<TOperacaoProducaoId | TOperacaoProducaoBase>