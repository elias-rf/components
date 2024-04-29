export type TFaturamentoRat = keyof typeof FaturamentoRat.fields

export const FaturamentoRat = {
  "database": "plano",
  "table": "FaturamentoRat",
  "primary": [
    "NumeroRAT"
  ],
  "fields": {
    "NumeroRAT": {
      "table": "FaturamentoRat",
      "name": "NumeroRAT",
      "data_type": "numeric",
      "max_length": 5,
      "numeric_precision": 9,
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
    "NumParcela": {
      "table": "FaturamentoRat",
      "name": "NumParcela",
      "data_type": "smallint",
      "max_length": 2,
      "numeric_precision": 5,
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
    "DataFaturamento": {
      "table": "FaturamentoRat",
      "name": "DataFaturamento",
      "data_type": "datetime",
      "max_length": 8,
      "numeric_precision": 23,
      "numeric_scale": 3,
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
    "VlFaturamento": {
      "table": "FaturamentoRat",
      "name": "VlFaturamento",
      "data_type": "money",
      "max_length": 8,
      "numeric_precision": 19,
      "numeric_scale": 4,
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
  