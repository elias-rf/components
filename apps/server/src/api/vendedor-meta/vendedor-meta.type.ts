export type TVendedorMetaId = {
}

export type TVendedorMetaBase = {
  id?: number;
  uf?: string;
  meta?: number;
}

 export type TVendedorMeta = Partial<TVendedorMetaId | TVendedorMetaBase>