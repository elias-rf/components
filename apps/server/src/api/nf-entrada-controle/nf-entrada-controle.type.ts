export type TNfEntradaControleId = {
  filial_id: number;
  nota_id: number;
  serie_id: string;
  modelo_id: string;
}

export type TNfEntradaControleBase = {
  fornecedor_id?: number;
  produto_id?: string;
  controle?: string;
  quantidade?: number;
}

 export type TNfEntradaControle = Partial<TNfEntradaControleId | TNfEntradaControleBase>