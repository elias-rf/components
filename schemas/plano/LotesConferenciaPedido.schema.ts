export type TLotesConferenciaPedido = keyof typeof LotesConferenciaPedido.fields

export const LotesConferenciaPedido = {
  "database": "plano",
  "table": "LotesConferenciaPedido",
  "primary": [],
  "fields": {
    "CdFilial": {
      "table": "LotesConferenciaPedido",
      "name": "CdFilial",
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
    },
    "NumPedido": {
      "table": "LotesConferenciaPedido",
      "name": "NumPedido",
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
    },
    "FgConferencia": {
      "table": "LotesConferenciaPedido",
      "name": "FgConferencia",
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
    "NumOrdemFaturamento": {
      "table": "LotesConferenciaPedido",
      "name": "NumOrdemFaturamento",
      "data_type": "numeric",
      "max_length": 5,
      "numeric_precision": 3,
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
  