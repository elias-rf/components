export type TEmpregadoId = {
  empregado_id: number;
}

export type TEmpregadoBase = {
  empresa_id?: number;
  nome?: string;
  identidade?: string;
  funcao?: string;
  afastado?: number;
  setor?: string;
}

 export type TEmpregado = Partial<TEmpregadoId | TEmpregadoBase>