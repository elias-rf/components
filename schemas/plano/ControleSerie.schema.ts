import { Schema } from "../schemas.type";

export const ControleSerie: Schema =
  {
  "database": "plano",
  "table": "ControleSerie",
  "primary": [],
  "fields": {
    "AutoNumero": {
      "table": "ControleSerie",
      "name": "AutoNumero",
      "data_type": "money",
      "max_length": 8,
      "numeric_precision": 19,
      "numeric_scale": 4,
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
