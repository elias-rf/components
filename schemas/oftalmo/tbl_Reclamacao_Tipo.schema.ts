import { Schema } from "../schemas.type";

export const tbl_Reclamacao_Tipo: Schema =
  {
  "database": "oftalmo",
  "table": "tbl_Reclamacao_Tipo",
  "primary": [
    "kTipo"
  ],
  "fields": {
    "kTipo": {
      "table": "tbl_Reclamacao_Tipo",
      "name": "kTipo",
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
    }
  }
}
