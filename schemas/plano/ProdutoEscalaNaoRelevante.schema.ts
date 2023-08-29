export type TProdutoEscalaNaoRelevante = keyof typeof ProdutoEscalaNaoRelevante.fields

export const ProdutoEscalaNaoRelevante = {
  "database": "plano",
  "table": "ProdutoEscalaNaoRelevante",
  "primary": [
    "CdProduto"
  ],
  "fields": {
    "CdProduto": {
      "table": "ProdutoEscalaNaoRelevante",
      "name": "CdProduto",
      "data_type": "varchar",
      "max_length": 18,
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
    "CNPJFabricante": {
      "table": "ProdutoEscalaNaoRelevante",
      "name": "CNPJFabricante",
      "data_type": "numeric",
      "max_length": 9,
      "numeric_precision": 14,
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
  