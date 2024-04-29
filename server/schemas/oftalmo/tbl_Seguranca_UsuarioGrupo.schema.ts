export type Ttbl_Seguranca_UsuarioGrupo = keyof typeof tbl_Seguranca_UsuarioGrupo.fields

export const tbl_Seguranca_UsuarioGrupo = {
  "database": "oftalmo",
  "table": "tbl_Seguranca_UsuarioGrupo",
  "primary": [],
  "fields": {
    "fkNomeUsuario": {
      "table": "tbl_Seguranca_UsuarioGrupo",
      "name": "fkNomeUsuario",
      "data_type": "varchar",
      "max_length": 50,
      "numeric_precision": null,
      "numeric_scale": null,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": "tbl_Seguranca_Usuario",
      "foreign_key_column": "NomeUsuario",
      "is_generated": false,
      "generation_expression": null
    },
    "fkGrupo": {
      "table": "tbl_Seguranca_UsuarioGrupo",
      "name": "fkGrupo",
      "data_type": "int",
      "max_length": 4,
      "numeric_precision": 10,
      "numeric_scale": null,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": "tbl_Seguranca_Grupo",
      "foreign_key_column": "kGrupo",
      "is_generated": false,
      "generation_expression": null
    }
  }
}
  