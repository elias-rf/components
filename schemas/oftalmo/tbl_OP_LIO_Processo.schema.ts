import { Schema } from "../schemas.type";

export const tbl_OP_LIO_Processo: Schema =
  {
  "database": "oftalmo",
  "table": "tbl_OP_LIO_Processo",
  "primary": [],
  "fields": {
    "fkOPLio": {
      "table": "tbl_OP_LIO_Processo",
      "name": "fkOPLio",
      "data_type": "int",
      "max_length": 4,
      "numeric_precision": 10,
      "numeric_scale": null,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": "tbl_OP_LIO",
      "foreign_key_column": "kOpLIO",
      "is_generated": false,
      "generation_expression": null
    },
    "fkOperacao": {
      "table": "tbl_OP_LIO_Processo",
      "name": "fkOperacao",
      "data_type": "smallint",
      "max_length": 2,
      "numeric_precision": 5,
      "numeric_scale": null,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": "tbl_OP_Operacao_tipo",
      "foreign_key_column": "kOperacao",
      "is_generated": false,
      "generation_expression": null
    },
    "Quantidade": {
      "table": "tbl_OP_LIO_Processo",
      "name": "Quantidade",
      "data_type": "int",
      "max_length": 4,
      "numeric_precision": 10,
      "numeric_scale": null,
      "is_nullable": false,
      "default_value": "0",
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
