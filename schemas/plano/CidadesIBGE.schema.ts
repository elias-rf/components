import { Schema } from "../schemas.type";

export const CidadesIBGE: Schema =
  {
  "database": "plano",
  "table": "CidadesIBGE",
  "primary": [],
  "fields": {
    "CdUFIBGE": {
      "table": "CidadesIBGE",
      "name": "CdUFIBGE",
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
    "CdCidadeIBGE": {
      "table": "CidadesIBGE",
      "name": "CdCidadeIBGE",
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
    "NmCidadeIBGE": {
      "table": "CidadesIBGE",
      "name": "NmCidadeIBGE",
      "data_type": "varchar",
      "max_length": 80,
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
