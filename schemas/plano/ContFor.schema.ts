import { Schema } from "../schemas.type";

export const ContFor: Schema =
  {
  "database": "plano",
  "table": "ContFor",
  "primary": [],
  "fields": {
    "CdFornecedor": {
      "table": "ContFor",
      "name": "CdFornecedor",
      "data_type": "money",
      "max_length": 8,
      "numeric_precision": 19,
      "numeric_scale": 4,
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
    "NumSequencia": {
      "table": "ContFor",
      "name": "NumSequencia",
      "data_type": "smallint",
      "max_length": 2,
      "numeric_precision": 5,
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
    "NmContato": {
      "table": "ContFor",
      "name": "NmContato",
      "data_type": "varchar",
      "max_length": 80,
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
    },
    "Telefone": {
      "table": "ContFor",
      "name": "Telefone",
      "data_type": "varchar",
      "max_length": 15,
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
    },
    "Ramal": {
      "table": "ContFor",
      "name": "Ramal",
      "data_type": "smallint",
      "max_length": 2,
      "numeric_precision": 5,
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
    },
    "Cargo": {
      "table": "ContFor",
      "name": "Cargo",
      "data_type": "varchar",
      "max_length": 25,
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
