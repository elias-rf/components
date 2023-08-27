import { Schema } from "../schemas.type";

export const EmailVidalink: Schema =
  {
  "database": "plano",
  "table": "EmailVidalink",
  "primary": [],
  "fields": {
    "Email": {
      "table": "EmailVidalink",
      "name": "Email",
      "data_type": "varchar",
      "max_length": 100,
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
