import { Schema } from "../schemas.type";

export const ParametrosFiscaisNop: Schema =
  {
  "database": "plano",
  "table": "ParametrosFiscaisNop",
  "primary": [],
  "fields": {
    "IdParametro": {
      "table": "ParametrosFiscaisNop",
      "name": "IdParametro",
      "data_type": "smallint",
      "max_length": 2,
      "numeric_precision": 5,
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
    "Nop": {
      "table": "ParametrosFiscaisNop",
      "name": "Nop",
      "data_type": "smallint",
      "max_length": 2,
      "numeric_precision": 5,
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
