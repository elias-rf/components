import { Schema } from "../schemas.type";

export const VidalinkLstConvida: Schema =
  {
  "database": "plano",
  "table": "VidalinkLstConvida",
  "primary": [],
  "fields": {
    "Id": {
      "table": "VidalinkLstConvida",
      "name": "Id",
      "data_type": "int",
      "max_length": 4,
      "numeric_precision": 10,
      "numeric_scale": null,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": true,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "Data": {
      "table": "VidalinkLstConvida",
      "name": "Data",
      "data_type": "datetime",
      "max_length": 8,
      "numeric_precision": 23,
      "numeric_scale": 3,
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
    "Texto": {
      "table": "VidalinkLstConvida",
      "name": "Texto",
      "data_type": "varchar",
      "max_length": 5040,
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
