import { Schema } from "../schemas.type";

export const tbl_Produto_Categoria_Tipo: Schema =
  {
  "database": "oftalmo",
  "table": "tbl_Produto_Categoria_Tipo",
  "primary": [
    "kCategoriaTipo"
  ],
  "fields": {
    "kCategoriaTipo": {
      "table": "tbl_Produto_Categoria_Tipo",
      "name": "kCategoriaTipo",
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
    "CategoriaTipo": {
      "table": "tbl_Produto_Categoria_Tipo",
      "name": "CategoriaTipo",
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
