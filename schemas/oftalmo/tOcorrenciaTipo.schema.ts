export type TtOcorrenciaTipo = keyof typeof tOcorrenciaTipo.fields

export const tOcorrenciaTipo = {
  "database": "oftalmo",
  "table": "tOcorrenciaTipo",
  "primary": [
    "kTipo"
  ],
  "fields": {
    "kTipo": {
      "table": "tOcorrenciaTipo",
      "name": "kTipo",
      "data_type": "varchar",
      "max_length": 30,
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
  