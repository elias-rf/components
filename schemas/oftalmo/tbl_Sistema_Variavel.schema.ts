import { Schema } from "../schemas.type";

export const tbl_Sistema_Variavel: Schema =
  {
  "database": "oftalmo",
  "table": "tbl_Sistema_Variavel",
  "primary": [
    "kVar"
  ],
  "fields": {
    "kVar": {
      "table": "tbl_Sistema_Variavel",
      "name": "kVar",
      "data_type": "varchar",
      "max_length": 50,
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
    "Vlr": {
      "table": "tbl_Sistema_Variavel",
      "name": "Vlr",
      "data_type": "varchar",
      "max_length": 250,
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
    "Descricao": {
      "table": "tbl_Sistema_Variavel",
      "name": "Descricao",
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
