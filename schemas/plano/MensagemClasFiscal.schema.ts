import { Schema } from "../schemas.type";

export const MensagemClasFiscal: Schema =
  {
  "database": "plano",
  "table": "MensagemClasFiscal",
  "primary": [
    "ClasFiscal"
  ],
  "fields": {
    "ClasFiscal": {
      "table": "MensagemClasFiscal",
      "name": "ClasFiscal",
      "data_type": "varchar",
      "max_length": 64,
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
    "Mensagem": {
      "table": "MensagemClasFiscal",
      "name": "Mensagem",
      "data_type": "varchar",
      "max_length": 128,
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
