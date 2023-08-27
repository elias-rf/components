import { Schema } from "../schemas.type";

export const SpedNopNSILVA: Schema =
  {
  "database": "plano",
  "table": "SpedNopNSILVA",
  "primary": [
    "Nop"
  ],
  "fields": {
    "Nop": {
      "table": "SpedNopNSILVA",
      "name": "Nop",
      "data_type": "money",
      "max_length": 8,
      "numeric_precision": 19,
      "numeric_scale": 4,
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
    "Descricao": {
      "table": "SpedNopNSILVA",
      "name": "Descricao",
      "data_type": "varchar",
      "max_length": 512,
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
