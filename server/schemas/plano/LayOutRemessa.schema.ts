export type TLayOutRemessa = keyof typeof LayOutRemessa.fields

export const LayOutRemessa = {
  "database": "plano",
  "table": "LayOutRemessa",
  "primary": [
    "IdLayOut"
  ],
  "fields": {
    "IdLayOut": {
      "table": "LayOutRemessa",
      "name": "IdLayOut",
      "data_type": "varchar",
      "max_length": 124,
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
    }
  }
}
  