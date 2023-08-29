export type TLimiteDescontoComissao = keyof typeof LimiteDescontoComissao.fields

export const LimiteDescontoComissao = {
  "database": "plano",
  "table": "LimiteDescontoComissao",
  "primary": [
    "PercLimite"
  ],
  "fields": {
    "PercLimite": {
      "table": "LimiteDescontoComissao",
      "name": "PercLimite",
      "data_type": "money",
      "max_length": 8,
      "numeric_precision": 19,
      "numeric_scale": 4,
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
    "PercReducao": {
      "table": "LimiteDescontoComissao",
      "name": "PercReducao",
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
  