import { Schema } from "../schemas.type";

export const UnidadeMedida: Schema =
  {
  "database": "plano",
  "table": "UnidadeMedida",
  "primary": [
    "Unidade"
  ],
  "fields": {
    "Unidade": {
      "table": "UnidadeMedida",
      "name": "Unidade",
      "data_type": "char",
      "max_length": 5,
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
    "DescricaoUnidade": {
      "table": "UnidadeMedida",
      "name": "DescricaoUnidade",
      "data_type": "varchar",
      "max_length": 20,
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
