import { Schema } from "../schemas.type";

export const TipoLIberacao: Schema =
  {
  "database": "plano",
  "table": "TipoLIberacao",
  "primary": [
    "CdTipoLiberacao"
  ],
  "fields": {
    "CdTipoLiberacao": {
      "table": "TipoLIberacao",
      "name": "CdTipoLiberacao",
      "data_type": "numeric",
      "max_length": 9,
      "numeric_precision": 18,
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
    "Descricao": {
      "table": "TipoLIberacao",
      "name": "Descricao",
      "data_type": "varchar",
      "max_length": 32,
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
