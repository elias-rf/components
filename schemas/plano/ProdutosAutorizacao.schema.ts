export type TProdutosAutorizacao = keyof typeof ProdutosAutorizacao.fields

export const ProdutosAutorizacao = {
  "database": "plano",
  "table": "ProdutosAutorizacao",
  "primary": [],
  "fields": {
    "Autorizador": {
      "table": "ProdutosAutorizacao",
      "name": "Autorizador",
      "data_type": "char",
      "max_length": 20,
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
    "CdProduto": {
      "table": "ProdutosAutorizacao",
      "name": "CdProduto",
      "data_type": "char",
      "max_length": 15,
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
  