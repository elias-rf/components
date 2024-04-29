export type Ttbl_Sistema_Objeto_Grupo = keyof typeof tbl_Sistema_Objeto_Grupo.fields

export const tbl_Sistema_Objeto_Grupo = {
  "database": "oftalmo",
  "table": "tbl_Sistema_Objeto_Grupo",
  "primary": [],
  "fields": {
    "fkGrupo": {
      "table": "tbl_Sistema_Objeto_Grupo",
      "name": "fkGrupo",
      "data_type": "smallint",
      "max_length": 2,
      "numeric_precision": 5,
      "numeric_scale": null,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": "tbl_Sistema_Grupo",
      "foreign_key_column": "kSistemaGrupo",
      "is_generated": false,
      "generation_expression": null
    },
    "fkObjeto": {
      "table": "tbl_Sistema_Objeto_Grupo",
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
  