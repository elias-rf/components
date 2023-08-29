export type TtOcorrenciaOrigem = keyof typeof tOcorrenciaOrigem.fields

export const tOcorrenciaOrigem = {
  "database": "oftalmo",
  "table": "tOcorrenciaOrigem",
  "primary": [
    "kOrigem"
  ],
  "fields": {
    "kOrigem": {
      "table": "tOcorrenciaOrigem",
      "name": "kOrigem",
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
  