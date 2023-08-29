export type TProdutoLei2622 = keyof typeof ProdutoLei2622.fields

export const ProdutoLei2622 = {
  "database": "plano",
  "table": "ProdutoLei2622",
  "primary": [
    "CdProduto"
  ],
  "fields": {
    "CdProduto": {
      "table": "ProdutoLei2622",
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
    "UnidadeMedida": {
      "table": "ProdutoLei2622",
      "name": "UnidadeMedida",
      "data_type": "char",
      "max_length": 2,
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
    "Operacao": {
      "table": "ProdutoLei2622",
      "name": "Operacao",
      "data_type": "char",
      "max_length": 1,
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
    "Multiplicador": {
      "table": "ProdutoLei2622",
      "name": "Multiplicador",
      "data_type": "numeric",
      "max_length": 5,
      "numeric_precision": 6,
      "numeric_scale": 2,
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
  