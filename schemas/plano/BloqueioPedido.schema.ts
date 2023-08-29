export type TBloqueioPedido = keyof typeof BloqueioPedido.fields

export const BloqueioPedido = {
  "database": "plano",
  "table": "BloqueioPedido",
  "primary": [],
  "fields": {
    "NumPedido": {
      "table": "BloqueioPedido",
      "name": "NumPedido",
      "data_type": "float",
      "max_length": 8,
      "numeric_precision": 53,
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
    "Estacao": {
      "table": "BloqueioPedido",
      "name": "Estacao",
      "data_type": "varchar",
      "max_length": 128,
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
    "CdFilial": {
      "table": "BloqueioPedido",
      "name": "CdFilial",
      "data_type": "int",
      "max_length": 4,
      "numeric_precision": 10,
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
  