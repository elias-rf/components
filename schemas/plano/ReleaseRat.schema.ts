import { Schema } from "../schemas.type";

export const ReleaseRat: Schema =
  {
  "database": "plano",
  "table": "ReleaseRat",
  "primary": [
    "CdReleaseRAT"
  ],
  "fields": {
    "CdReleaseRAT": {
      "table": "ReleaseRat",
      "name": "CdReleaseRAT",
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
    "NumeroRat": {
      "table": "ReleaseRat",
      "name": "NumeroRat",
      "data_type": "numeric",
      "max_length": 5,
      "numeric_precision": 9,
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
    "ReleaseFuncionalidade": {
      "table": "ReleaseRat",
      "name": "ReleaseFuncionalidade",
      "data_type": "varchar",
      "max_length": 4000,
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
    "ReleaseDescricao": {
      "table": "ReleaseRat",
      "name": "ReleaseDescricao",
      "data_type": "varchar",
      "max_length": 8000,
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
    "ReleaseObservacao": {
      "table": "ReleaseRat",
      "name": "ReleaseObservacao",
      "data_type": "varchar",
      "max_length": 8000,
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
