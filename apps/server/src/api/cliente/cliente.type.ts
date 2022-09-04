export type TClienteId = {
  cliente_id: number;
}

export type TClienteBase = {
  nome?: string;
  cidade?: string;
  uf?: string;
  cnpj?: string;
  vendedor_id?: string;
  is_ativo?: string;
}

 export type TCliente = Partial<TClienteId | TClienteBase>