import { Schema } from "../schemas.type";

export const CadProFoto: Schema =
  {
  "database": "plano",
  "table": "CadProFoto",
  "primary": [
    "CdProduto"
  ],
  "fields": {
    "CdProduto": {
      "table": "CadProFoto",
      "name": "CdProduto",
      "data_type": "varchar",
      "max_length": 15,
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
    "Foto": {
      "table": "CadProFoto",
      "name": "Foto",
      "data_type": "ntext",
      "max_length": 8,
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
