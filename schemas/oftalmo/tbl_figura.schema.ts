import { Schema } from "../schemas.type";

export const tbl_figura: Schema =
  {
  "database": "oftalmo",
  "table": "tbl_figura",
  "primary": [
    "KFigura"
  ],
  "fields": {
    "KFigura": {
      "table": "tbl_figura",
      "name": "KFigura",
      "data_type": "smallint",
      "max_length": 2,
      "numeric_precision": 5,
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
    "Figura": {
      "table": "tbl_figura",
      "name": "Figura",
      "data_type": "image",
      "max_length": 16,
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
    "TipoFigura": {
      "table": "tbl_figura",
      "name": "TipoFigura",
      "data_type": "tinyint",
      "max_length": 1,
      "numeric_precision": 3,
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
