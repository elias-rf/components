import { TEntity } from "@er/types/*";

export const tbl_Produto_Desenho: TEntity =
  {
  "database": "oftalmo",
  "table": "tbl_Produto_Desenho",
  "fields": [
    {
      "field": "fkProduto",
      "label": "fkProduto",
      "name": "tbl_Produto_Desenho_id",
      "type": "int",
      "size": 4,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "Tipo",
      "label": "Tipo",
      "name": "Tipo",
      "type": "string",
      "size": 50
    },
    {
      "field": "DesenhoTecnico",
      "label": "DesenhoTecnico",
      "name": "DesenhoTecnico",
      "type": "image",
      "size": 16
    },
    {
      "field": "EtiquetaS600",
      "label": "EtiquetaS600",
      "name": "EtiquetaS600",
      "type": "string",
      "size": 16
    },
    {
      "field": "EtiquetaS4M",
      "label": "EtiquetaS4M",
      "name": "EtiquetaS4M",
      "type": "string",
      "size": 16
    },
    {
      "field": "EtiquetaInternaPrimParam",
      "label": "EtiquetaInternaPrimParam",
      "name": "EtiquetaInternaPrimParam",
      "type": "int",
      "size": 1,
      "defaultValue": "0"
    },
    {
      "field": "EtiquetaInternaSegParam",
      "label": "EtiquetaInternaSegParam",
      "name": "EtiquetaInternaSegParam",
      "type": "int",
      "size": 1,
      "defaultValue": "0"
    },
    {
      "field": "EtiquetaExterna1",
      "label": "EtiquetaExterna1",
      "name": "EtiquetaExterna1",
      "type": "string",
      "size": 16
    },
    {
      "field": "EtiquetaExterna2",
      "label": "EtiquetaExterna2",
      "name": "EtiquetaExterna2",
      "type": "string",
      "size": 16
    },
    {
      "field": "EtiquetaExterna3",
      "label": "EtiquetaExterna3",
      "name": "EtiquetaExterna3",
      "type": "string",
      "size": 16
    },
    {
      "field": "EtiquetaExterna4",
      "label": "EtiquetaExterna4",
      "name": "EtiquetaExterna4",
      "type": "string",
      "size": 16
    },
    {
      "field": "EtiquetaExterna5",
      "label": "EtiquetaExterna5",
      "name": "EtiquetaExterna5",
      "type": "string",
      "size": 16
    },
    {
      "field": "EtiquetaExterna6",
      "label": "EtiquetaExterna6",
      "name": "EtiquetaExterna6",
      "type": "string",
      "size": 16
    },
    {
      "field": "EtiquetaExterna7",
      "label": "EtiquetaExterna7",
      "name": "EtiquetaExterna7",
      "type": "string",
      "size": 16
    }
  ]
}
