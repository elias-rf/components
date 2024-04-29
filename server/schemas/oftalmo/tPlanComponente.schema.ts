export type TtPlanComponente = keyof typeof tPlanComponente.fields

export const tPlanComponente = {
  "database": "oftalmo",
  "table": "tPlanComponente",
  "primary": [
    "kPlanComponente"
  ],
  "fields": {
    "kPlanComponente": {
      "table": "tPlanComponente",
      "name": "kPlanComponente",
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
    "fkPlanItem": {
      "table": "tPlanComponente",
      "name": "fkPlanItem",
      "data_type": "int",
      "max_length": 4,
      "numeric_precision": 10,
      "numeric_scale": null,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": "tPlanItem",
      "foreign_key_column": "kPlanItem",
      "is_generated": false,
      "generation_expression": null
    },
    "NomeComponente": {
      "table": "tPlanComponente",
      "name": "NomeComponente",
      "data_type": "varchar",
      "max_length": 100,
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
    "BaseFrequencia": {
      "table": "tPlanComponente",
      "name": "BaseFrequencia",
      "data_type": "char",
      "max_length": 3,
      "numeric_precision": null,
      "numeric_scale": null,
      "is_nullable": false,
      "default_value": "Dia",
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "Frequencia": {
      "table": "tPlanComponente",
      "name": "Frequencia",
      "data_type": "int",
      "max_length": 4,
      "numeric_precision": 10,
      "numeric_scale": null,
      "is_nullable": false,
      "default_value": "1",
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "TempoAviso": {
      "table": "tPlanComponente",
      "name": "TempoAviso",
      "data_type": "smallint",
      "max_length": 2,
      "numeric_precision": 5,
      "numeric_scale": null,
      "is_nullable": false,
      "default_value": "1",
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
  