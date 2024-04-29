export type TProdutoRegMinAgricultura = keyof typeof ProdutoRegMinAgricultura.fields

export const ProdutoRegMinAgricultura = {
  "database": "plano",
  "table": "ProdutoRegMinAgricultura",
  "primary": [
    "CdProduto"
  ],
  "fields": {
    "CdProduto": {
      "table": "ProdutoRegMinAgricultura",
      "name": "CdProduto",
      "data_type": "varchar",
      "max_length": 15,
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
    "CdRegMinAgricAbastec": {
      "table": "ProdutoRegMinAgricultura",
      "name": "CdRegMinAgricAbastec",
      "data_type": "varchar",
      "max_length": 14,
      "numeric_precision": null,
      "numeric_scale": null,
      "is_nullable": true,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "CdN": {
      "table": "ProdutoRegMinAgricultura",
      "name": "CdN",
      "data_type": "char",
      "max_length": 2,
      "numeric_precision": null,
      "numeric_scale": null,
      "is_nullable": true,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "CdP": {
      "table": "ProdutoRegMinAgricultura",
      "name": "CdP",
      "data_type": "char",
      "max_length": 2,
      "numeric_precision": null,
      "numeric_scale": null,
      "is_nullable": true,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "CdK": {
      "table": "ProdutoRegMinAgricultura",
      "name": "CdK",
      "data_type": "char",
      "max_length": 2,
      "numeric_precision": null,
      "numeric_scale": null,
      "is_nullable": true,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "CdH2O": {
      "table": "ProdutoRegMinAgricultura",
      "name": "CdH2O",
      "data_type": "char",
      "max_length": 2,
      "numeric_precision": null,
      "numeric_scale": null,
      "is_nullable": true,
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
  