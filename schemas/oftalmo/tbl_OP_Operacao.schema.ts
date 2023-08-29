export type Ttbl_OP_Operacao = keyof typeof tbl_OP_Operacao.fields

export const tbl_OP_Operacao = {
  "database": "oftalmo",
  "table": "tbl_OP_Operacao",
  "primary": [],
  "fields": {
    "kOperacao": {
      "table": "tbl_OP_Operacao",
      "name": "kOperacao",
      "data_type": "smallint",
      "max_length": 2,
      "numeric_precision": 5,
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
    "Descricao": {
      "table": "tbl_OP_Operacao",
      "name": "Descricao",
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
    },
    "Grupo": {
      "table": "tbl_OP_Operacao",
      "name": "Grupo",
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
    "Ordem": {
      "table": "tbl_OP_Operacao",
      "name": "Ordem",
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
    "ehRetrabalho": {
      "table": "tbl_OP_Operacao",
      "name": "ehRetrabalho",
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
    }
  }
}
  