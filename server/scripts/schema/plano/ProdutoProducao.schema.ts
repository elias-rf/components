import { TEntity } from "@er/types/*";

export const ProdutoProducao: TEntity =
  {
  "database": "plano",
  "table": "ProdutoProducao",
  "fields": [
    {
      "field": "CdProduto",
      "label": "CdProduto",
      "name": "ProdutoProducao_id",
      "type": "string",
      "size": 16,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "CdLinhaProducao",
      "label": "CdLinhaProducao",
      "name": "CdLinhaProducao",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "ImagemOrdemProducao",
      "label": "ImagemOrdemProducao",
      "name": "ImagemOrdemProducao",
      "type": "ntext",
      "size": 8,
      "allowNull": false
    },
    {
      "field": "EspecificacaoProducao",
      "label": "EspecificacaoProducao",
      "name": "EspecificacaoProducao",
      "type": "string",
      "size": 256,
      "allowNull": false
    },
    {
      "field": "EtiquetaExterna",
      "label": "EtiquetaExterna",
      "name": "EtiquetaExterna",
      "type": "string",
      "size": 16,
      "allowNull": false
    },
    {
      "field": "EtiquetaInterna",
      "label": "EtiquetaInterna",
      "name": "EtiquetaInterna",
      "type": "string",
      "size": 16,
      "allowNull": false
    }
  ]
}
