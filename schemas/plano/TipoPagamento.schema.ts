export type TTipoPagamento = keyof typeof TipoPagamento.fields

export const TipoPagamento = {
  "database": "plano",
  "table": "TipoPagamento",
  "primary": [
    "CdTipoPagamento"
  ],
  "fields": {
    "CdTipoPagamento": {
      "table": "TipoPagamento",
      "name": "CdTipoPagamento",
      "data_type": "smallint",
      "max_length": 2,
      "numeric_precision": 5,
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
    "Descricao": {
      "table": "TipoPagamento",
      "name": "Descricao",
      "data_type": "char",
      "max_length": 40,
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
  