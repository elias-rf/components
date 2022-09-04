export type TEstoqueId = {
  filial_id: number;
  produto_id: string;
}

export type TEstoqueBase = {
  estoque?: number;
}

 export type TEstoque = Partial<TEstoqueId | TEstoqueBase>