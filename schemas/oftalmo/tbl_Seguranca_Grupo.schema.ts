export type Ttbl_Seguranca_Grupo = keyof typeof tbl_Seguranca_Grupo.fields

export const tbl_Seguranca_Grupo = {
  "database": "oftalmo",
  "table": "tbl_Seguranca_Grupo",
  "primary": [
    "kGrupo"
  ],
  "fields": {
    "kGrupo": {
      "table": "tbl_Seguranca_Grupo",
      "name": "kGrupo",
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
    "NomeGrupo": {
      "table": "tbl_Seguranca_Grupo",
      "name": "NomeGrupo",
      "data_type": "varchar",
      "max_length": 50,
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
  