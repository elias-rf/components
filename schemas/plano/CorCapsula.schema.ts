import { Schema } from "../schemas.type";

export const CorCapsula: Schema =
  {
  "database": "plano",
  "table": "CorCapsula",
  "primary": [
    "CdCorCapsula"
  ],
  "fields": {
    "CdCorCapsula": {
      "table": "CorCapsula",
      "name": "CdCorCapsula",
      "data_type": "int",
      "max_length": 4,
      "numeric_precision": 10,
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
    "NmCorCapsula": {
      "table": "CorCapsula",
      "name": "NmCorCapsula",
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
    }
  }
}
