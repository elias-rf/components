import { Schema } from "../schemas.type";

export const tPlanItem: Schema =
  {
  "database": "oftalmo",
  "table": "tPlanItem",
  "primary": [
    "kPlanItem"
  ],
  "fields": {
    "kPlanItem": {
      "table": "tPlanItem",
      "name": "kPlanItem",
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
    "NomeItem": {
      "table": "tPlanItem",
      "name": "NomeItem",
      "data_type": "varchar",
      "max_length": 50,
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
    "fkPlanGrupo": {
      "table": "tPlanItem",
      "name": "fkPlanGrupo",
      "data_type": "int",
      "max_length": 4,
      "numeric_precision": 10,
      "numeric_scale": null,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": "tPlanGrupo",
      "foreign_key_column": "kPlanGrupo",
      "is_generated": false,
      "generation_expression": null
    }
  }
}
