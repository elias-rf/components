export type TNumeroPedido = keyof typeof NumeroPedido.fields

export const NumeroPedido = {
  "database": "plano",
  "table": "NumeroPedido",
  "primary": [
    "CdFilial"
  ],
  "fields": {
    "CdFilial": {
      "table": "NumeroPedido",
      "name": "CdFilial",
      "data_type": "int",
      "max_length": 4,
      "numeric_precision": 10,
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
    "NumUltPedido": {
      "table": "NumeroPedido",
      "name": "NumUltPedido",
      "data_type": "int",
      "max_length": 4,
      "numeric_precision": 10,
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
  