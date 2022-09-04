export type TDiamanteId = {
  diamante_id: string;
}

export type TDiamanteBase = {
  diamante?: string;
  tipo?: string;
  raio?: number;
  espessura?: number;
  maquina_id?: number;
  empregado_id?: number;
  data_entrada?: string;
  op_id_inicial?: number;
  data_saida?: string;
  op_id_final?: number;
  quantidade_corte?: number;
}

 export type TDiamante = Partial<TDiamanteId | TDiamanteBase>