export type TProdutoProducao = keyof typeof ProdutoProducao.fields

export const ProdutoProducao = {
  "database": "plano",
  "table": "ProdutoProducao",
  "primary": [
    "CdProduto"
  ],
  "fields": {
    "CdProduto": {
      "table": "ProdutoProducao",
      "name": "CdProduto",
      "data_type": "varchar",
      "max_length": 16,
      "numeric_precision": null,
      "numeric_scale": null,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": true,
      "is_unique": true,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "CdLinhaProducao": {
      "table": "ProdutoProducao",
      "name": "CdLinhaProducao",
      "data_type": "numeric",
      "max_length": 5,
      "numeric_precision": 4,
      "numeric_scale": null,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "ImagemOrdemProducao": {
      "table": "ProdutoProducao",
      "name": "ImagemOrdemProducao",
      "data_type": "ntext",
      "max_length": 8,
      "numeric_precision": null,
      "numeric_scale": null,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "EspecificacaoProducao": {
      "table": "ProdutoProducao",
      "name": "EspecificacaoProducao",
      "data_type": "varchar",
      "max_length": 256,
      "numeric_precision": null,
      "numeric_scale": null,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "EtiquetaExterna": {
      "table": "ProdutoProducao",
      "name": "EtiquetaExterna",
      "data_type": "varchar",
      "max_length": 16,
      "numeric_precision": null,
      "numeric_scale": null,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "EtiquetaInterna": {
      "table": "ProdutoProducao",
      "name": "EtiquetaInterna",
      "data_type": "varchar",
      "max_length": 16,
      "numeric_precision": null,
      "numeric_scale": null,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    }
  }
}
  