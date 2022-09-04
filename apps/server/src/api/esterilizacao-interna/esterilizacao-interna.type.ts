export type TEsterilizacaoInternaId = {
  esterilizacao_interna_id: number;
}

export type TEsterilizacaoInternaBase = {
  data_envio?: string;
  is_fechado?: number;
  resultado?: string;
  usuario_id_resultado?: number;
  observacao?: string;
  data_fechamento?: string;
  usuario_id_fechamento?: number;
  data_autoclave?: string;
}

 export type TEsterilizacaoInterna = Partial<TEsterilizacaoInternaId | TEsterilizacaoInternaBase>