export type TEtiquetaInternaId = {
  controle_id: string;
}

export type TEtiquetaInternaBase = {
  produto_item_id?: number;
  data?: string;
}

 export type TEtiquetaInterna = Partial<TEtiquetaInternaId | TEtiquetaInternaBase>