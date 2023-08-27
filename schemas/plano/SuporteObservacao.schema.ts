import { Schema } from "../schemas.type";

export const SuporteObservacao: Schema =
  {
  "database": "plano",
  "table": "SuporteObservacao",
  "primary": [
    "Usuario"
  ],
  "fields": {
    "Usuario": {
      "table": "SuporteObservacao",
      "name": "Usuario",
      "data_type": "varchar",
      "max_length": 32,
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
    "Observacao": {
      "table": "SuporteObservacao",
      "name": "Observacao",
      "data_type": "varchar",
      "max_length": 3072,
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
