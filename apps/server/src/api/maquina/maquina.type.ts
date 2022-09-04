export type TMaquinaId = {
  maquina_id: number;
}

export type TMaquinaBase = {
  nome?: number;
  serie?: number;
  divisao_id?: number;
  setor_id?: number;
  descricao?: number;
  frequencia?: string;
  is_ativo?: boolean;
}

 export type TMaquina = Partial<TMaquinaId | TMaquinaBase>