import { Schema } from "../schemas.type";

export const tNovoNome: Schema =
  {
  "database": "oftalmo",
  "table": "tNovoNome",
  "primary": [
    "NomeProdutoItem"
  ],
  "fields": {
    "NomeProdutoItem": {
      "table": "tNovoNome",
      "name": "NomeProdutoItem",
      "data_type": "varchar",
      "max_length": 30,
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
    "NovoNome": {
      "table": "tNovoNome",
      "name": "NovoNome",
      "data_type": "varchar",
      "max_length": 30,
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
