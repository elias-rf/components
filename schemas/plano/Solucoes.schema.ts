export type TSolucoes = keyof typeof Solucoes.fields

export const Solucoes = {
  "database": "plano",
  "table": "Solucoes",
  "primary": [
    "CdSolucao"
  ],
  "fields": {
    "CdSolucao": {
      "table": "Solucoes",
      "name": "CdSolucao",
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
    "NmSolucao": {
      "table": "Solucoes",
      "name": "NmSolucao",
      "data_type": "varchar",
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
  