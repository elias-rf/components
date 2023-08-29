export type Ttbl_Sistema_Grupo = keyof typeof tbl_Sistema_Grupo.fields

export const tbl_Sistema_Grupo = {
  "database": "oftalmo",
  "table": "tbl_Sistema_Grupo",
  "primary": [
    "kSistemaGrupo"
  ],
  "fields": {
    "kSistemaGrupo": {
      "table": "tbl_Sistema_Grupo",
      "name": "kSistemaGrupo",
      "data_type": "smallint",
      "max_length": 2,
      "numeric_precision": 5,
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
    "DescricaoGrupo": {
      "table": "tbl_Sistema_Grupo",
      "name": "DescricaoGrupo",
      "data_type": "varchar",
      "max_length": 60,
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
  