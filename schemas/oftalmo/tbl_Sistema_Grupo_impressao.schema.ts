export type Ttbl_Sistema_Grupo_impressao = keyof typeof tbl_Sistema_Grupo_impressao.fields

export const tbl_Sistema_Grupo_impressao = {
  "database": "oftalmo",
  "table": "tbl_Sistema_Grupo_impressao",
  "primary": [],
  "fields": {
    "Grupo": {
      "table": "tbl_Sistema_Grupo_impressao",
      "name": "Grupo",
      "data_type": "char",
      "max_length": 4,
      "numeric_precision": null,
      "numeric_scale": null,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": "tbl_Sistema_Objeto",
      "foreign_key_column": "kObjeto",
      "is_generated": false,
      "generation_expression": null
    },
    "fkObjeto": {
      "table": "tbl_Sistema_Grupo_impressao",
      "name": "fkObjeto",
      "data_type": "char",
      "max_length": 4,
      "numeric_precision": null,
      "numeric_scale": null,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": "tbl_Sistema_Objeto",
      "foreign_key_column": "kObjeto",
      "is_generated": false,
      "generation_expression": null
    }
  }
}
  