import { Schema } from "../schemas.type";

export const ProducaoNaoConformidade: Schema =
  {
  "database": "plano",
  "table": "ProducaoNaoConformidade",
  "primary": [
    "CdNaoConformidade"
  ],
  "fields": {
    "CdNaoConformidade": {
      "table": "ProducaoNaoConformidade",
      "name": "CdNaoConformidade",
      "data_type": "numeric",
      "max_length": 5,
      "numeric_precision": 4,
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
    "Descricao": {
      "table": "ProducaoNaoConformidade",
      "name": "Descricao",
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
    },
    "FgAtivo": {
      "table": "ProducaoNaoConformidade",
      "name": "FgAtivo",
      "data_type": "char",
      "max_length": 1,
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
