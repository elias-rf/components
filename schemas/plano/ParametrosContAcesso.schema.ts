import { Schema } from "../schemas.type";

export const ParametrosContAcesso: Schema =
  {
  "database": "plano",
  "table": "ParametrosContAcesso",
  "primary": [],
  "fields": {
    "DtUltAlteracao": {
      "table": "ParametrosContAcesso",
      "name": "DtUltAlteracao",
      "data_type": "datetime",
      "max_length": 8,
      "numeric_precision": 23,
      "numeric_scale": 3,
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
    "Base": {
      "table": "ParametrosContAcesso",
      "name": "Base",
      "data_type": "varchar",
      "max_length": 1024,
      "numeric_precision": null,
      "numeric_scale": null,
      "is_nullable": true,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "Estacao": {
      "table": "ParametrosContAcesso",
      "name": "Estacao",
      "data_type": "varchar",
      "max_length": 1024,
      "numeric_precision": null,
      "numeric_scale": null,
      "is_nullable": true,
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
