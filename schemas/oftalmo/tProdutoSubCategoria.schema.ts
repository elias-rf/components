import { Schema } from "../schemas.type";

export const tProdutoSubCategoria: Schema =
  {
  "database": "oftalmo",
  "table": "tProdutoSubCategoria",
  "primary": [
    "kSubCategoria"
  ],
  "fields": {
    "kSubCategoria": {
      "table": "tProdutoSubCategoria",
      "name": "kSubCategoria",
      "data_type": "int",
      "max_length": 4,
      "numeric_precision": 10,
      "numeric_scale": null,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": true,
      "is_unique": true,
      "has_auto_increment": true,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "SubCategoria": {
      "table": "tProdutoSubCategoria",
      "name": "SubCategoria",
      "data_type": "varchar",
      "max_length": 30,
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
    "Descricao": {
      "table": "tProdutoSubCategoria",
      "name": "Descricao",
      "data_type": "varchar",
      "max_length": 255,
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
    "fkCategoria": {
      "table": "tProdutoSubCategoria",
      "name": "fkCategoria",
      "data_type": "varchar",
      "max_length": 50,
      "numeric_precision": null,
      "numeric_scale": null,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": "tbl_produto_categoria",
      "foreign_key_column": "kCategoria",
      "is_generated": false,
      "generation_expression": null
    }
  }
}
