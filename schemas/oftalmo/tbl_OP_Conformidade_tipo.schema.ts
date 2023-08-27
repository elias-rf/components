import { Schema } from "../schemas.type";

export const tbl_OP_Conformidade_tipo: Schema =
  {
  "database": "oftalmo",
  "table": "tbl_OP_Conformidade_tipo",
  "primary": [
    "kConformidade"
  ],
  "fields": {
    "kConformidade": {
      "table": "tbl_OP_Conformidade_tipo",
      "name": "kConformidade",
      "data_type": "varchar",
      "max_length": 100,
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
