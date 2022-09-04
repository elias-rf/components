export type TNfCfopId = {
  cfop: number;
}

export type TNfCfopBase = {
  descricao?: string;
  estatistica?: string;
  estoque?: string;
}

 export type TNfCfop = Partial<TNfCfopId | TNfCfopBase>