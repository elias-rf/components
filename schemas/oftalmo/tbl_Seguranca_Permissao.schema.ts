import { Schema } from "../schemas.type";

export const tbl_Seguranca_Permissao: Schema =
  {
  "database": "oftalmo",
  "table": "tbl_Seguranca_Permissao",
  "primary": [
    "kPermissao"
  ],
  "fields": {
    "kPermissao": {
      "table": "tbl_Seguranca_Permissao",
      "name": "kPermissao",
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
    "fkGrupo": {
      "table": "tbl_Seguranca_Permissao",
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
    },
    "Permissao": {
      "table": "tbl_Seguranca_Permissao",
      "name": "Permissao",
      "data_type": "tinyint",
      "max_length": 1,
      "numeric_precision": 3,
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
    },
    "fkObjeto": {
      "table": "tbl_Seguranca_Permissao",
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
