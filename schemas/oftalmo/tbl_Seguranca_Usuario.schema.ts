export type Ttbl_Seguranca_Usuario = keyof typeof tbl_Seguranca_Usuario.fields

export const tbl_Seguranca_Usuario = {
  "database": "oftalmo",
  "table": "tbl_Seguranca_Usuario",
  "primary": [
    "kUsuario"
  ],
  "fields": {
    "kUsuario": {
      "table": "tbl_Seguranca_Usuario",
      "name": "kUsuario",
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
    "NomeUsuario": {
      "table": "tbl_Seguranca_Usuario",
      "name": "NomeUsuario",
      "data_type": "varchar",
      "max_length": 50,
      "numeric_precision": null,
      "numeric_scale": null,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": true,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "Senha": {
      "table": "tbl_Seguranca_Usuario",
      "name": "Senha",
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
    },
    "fkGrupo": {
      "table": "tbl_Seguranca_Usuario",
      "name": "fkGrupo",
      "data_type": "int",
      "max_length": 4,
      "numeric_precision": 10,
      "numeric_scale": null,
      "is_nullable": true,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": "tbl_Seguranca_Grupo",
      "foreign_key_column": "kGrupo",
      "is_generated": false,
      "generation_expression": null
    },
    "email": {
      "table": "tbl_Seguranca_Usuario",
      "name": "email",
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
    },
    "fkFuncionario": {
      "table": "tbl_Seguranca_Usuario",
      "name": "fkFuncionario",
      "data_type": "int",
      "max_length": 4,
      "numeric_precision": 10,
      "numeric_scale": null,
      "is_nullable": true,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": "tbl_Funcionario",
      "foreign_key_column": "kFuncionario",
      "is_generated": false,
      "generation_expression": null
    },
    "Ativo": {
      "table": "tbl_Seguranca_Usuario",
      "name": "Ativo",
      "data_type": "bit",
      "max_length": 1,
      "numeric_precision": 1,
      "numeric_scale": null,
      "is_nullable": true,
      "default_value": "1",
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "hash": {
      "table": "tbl_Seguranca_Usuario",
      "name": "hash",
      "data_type": "varchar",
      "max_length": 255,
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
    },
    "nome": {
      "table": "tbl_Seguranca_Usuario",
      "name": "nome",
      "data_type": "varchar",
      "max_length": 200,
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
    },
    "setor": {
      "table": "tbl_Seguranca_Usuario",
      "name": "setor",
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
    },
    "nivel": {
      "table": "tbl_Seguranca_Usuario",
      "name": "nivel",
      "data_type": "int",
      "max_length": 4,
      "numeric_precision": 10,
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
    },
    "idGroup": {
      "table": "tbl_Seguranca_Usuario",
      "name": "idGroup",
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
  