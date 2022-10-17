export type TNfSaidaFvId = {
  filial_id: number;
  nota_id: number;
  serie: number;
  modelo: string;
}

export type TNfSaidaFvBase = {
  data_emissao?: string;
  data_saida?: string;
  tipo?: string;
  cliente_id?: number;
  vendedor_id?: number;
  altera_vendas?: boolean;
  altera_estoque?: boolean;
  valor_total?: number;
  valor_produto?: number;
  valor_frete?: number;
  pedido_id?: number;
  cfop?: number;
}

 export type TNfSaidaFv = Partial<TNfSaidaFvId | TNfSaidaFvBase>