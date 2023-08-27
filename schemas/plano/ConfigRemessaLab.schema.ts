import { Schema } from "../schemas.type";

export const ConfigRemessaLab: Schema =
  {
  "database": "plano",
  "table": "ConfigRemessaLab",
  "primary": [],
  "fields": {
    "IdLayOut": {
      "table": "ConfigRemessaLab",
      "name": "IdLayOut",
      "data_type": "char",
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
    "CdFabricante": {
      "table": "ConfigRemessaLab",
      "name": "CdFabricante",
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
