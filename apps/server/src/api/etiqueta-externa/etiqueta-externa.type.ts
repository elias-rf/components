export type TEtiquetaExternaId = {
  etiqueta_externa_id: string;
}

export type TEtiquetaExternaBase = {
  quantidade?: number;
  data_fabricacao?: string;
}

 export type TEtiquetaExterna = Partial<TEtiquetaExternaId | TEtiquetaExternaBase>