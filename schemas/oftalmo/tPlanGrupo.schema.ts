export type TtPlanGrupo = keyof typeof tPlanGrupo.fields

export const tPlanGrupo = {
  "database": "oftalmo",
  "table": "tPlanGrupo",
  "primary": [
    "kPlanGrupo"
  ],
  "fields": {
    "kPlanGrupo": {
      "table": "tPlanGrupo",
      "name": "kPlanGrupo",
      "data_type": "int",
      "max_length": 4,
      "numeric_precision": 10,
      "numeric_scale": null,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": true,
      "is_unique": true,
      "has_auto_increment": true,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "NomeGrupo": {
      "table": "tPlanGrupo",
      "name": "NomeGrupo",
      "data_type": "varchar",
      "max_length": 50,
      "numeric_precision": null,
      "numeric_scale": null,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": true,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    }
  }
}
  