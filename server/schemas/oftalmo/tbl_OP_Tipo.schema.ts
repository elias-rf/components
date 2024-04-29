export type Ttbl_OP_Tipo = keyof typeof tbl_OP_Tipo.fields

export const tbl_OP_Tipo = {
  "database": "oftalmo",
  "table": "tbl_OP_Tipo",
  "primary": [
    "kTipoOP"
  ],
  "fields": {
    "kTipoOP": {
      "table": "tbl_OP_Tipo",
      "name": "kTipoOP",
      "data_type": "int",
      "max_length": 4,
      "numeric_precision": 10,
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
    "TipoOP": {
      "table": "tbl_OP_Tipo",
      "name": "TipoOP",
      "data_type": "varchar",
      "max_length": 50,
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
  