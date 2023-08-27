import { Schema } from "../schemas.type";

export const PostoProdutivo: Schema =
  {
  "database": "plano",
  "table": "PostoProdutivo",
  "primary": [
    "CdPostoProdutivo"
  ],
  "fields": {
    "CdPostoProdutivo": {
      "table": "PostoProdutivo",
      "name": "CdPostoProdutivo",
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
    "DescPostoProdutivo": {
      "table": "PostoProdutivo",
      "name": "DescPostoProdutivo",
      "data_type": "char",
      "max_length": 40,
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
