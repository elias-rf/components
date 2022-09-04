export type TEsterilizacaoExternaId = {
  esterilizacao_externa_id: number;
}

export type TEsterilizacaoExternaBase = {
  data_envio?: string;
  data_retorno?: string;
  quantidade?: number;
  quantidade_caixa?: number;
  is_fechado?: number;
  resultado?: string;
  usuario_id?: number;
  observacao?: string;
  lote?: string;
}

 export type TEsterilizacaoExterna = Partial<TEsterilizacaoExternaId | TEsterilizacaoExternaBase>