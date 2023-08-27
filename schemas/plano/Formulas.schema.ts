import { Schema } from "../schemas.type";

export const Formulas: Schema =
  {
  "database": "plano",
  "table": "Formulas",
  "primary": [],
  "fields": {
    "Origem": {
      "table": "Formulas",
      "name": "Origem",
      "data_type": "char",
      "max_length": 5,
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
    "Destino": {
      "table": "Formulas",
      "name": "Destino",
      "data_type": "varchar",
      "max_length": 5,
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
    "Formula": {
      "table": "Formulas",
      "name": "Formula",
      "data_type": "varchar",
      "max_length": 50,
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
