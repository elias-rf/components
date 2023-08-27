import { Schema } from "../schemas.type";

export const LiberaAcessos: Schema =
  {
  "database": "plano",
  "table": "LiberaAcessos",
  "primary": [
    "CgcCpf"
  ],
  "fields": {
    "CgcCpf": {
      "table": "LiberaAcessos",
      "name": "CgcCpf",
      "data_type": "varchar",
      "max_length": 60,
      "numeric_precision": null,
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
    "DHLibEmergencia": {
      "table": "LiberaAcessos",
      "name": "DHLibEmergencia",
      "data_type": "varchar",
      "max_length": 60,
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
