import { Schema } from "../schemas.type";

export const tbl_OP_Loop_Tamboreamento: Schema =
  {
  "database": "oftalmo",
  "table": "tbl_OP_Loop_Tamboreamento",
  "primary": [
    "kOpLoopTamboreamento"
  ],
  "fields": {
    "kOpLoopTamboreamento": {
      "table": "tbl_OP_Loop_Tamboreamento",
      "name": "kOpLoopTamboreamento",
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
    "fkOpLoop": {
      "table": "tbl_OP_Loop_Tamboreamento",
      "name": "fkOpLoop",
      "data_type": "varchar",
      "max_length": 8,
      "numeric_precision": null,
      "numeric_scale": null,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": "tbl_OP_Loop",
      "foreign_key_column": "kOpLoop",
      "is_generated": false,
      "generation_expression": null
    },
    "DataHoraInicial": {
      "table": "tbl_OP_Loop_Tamboreamento",
      "name": "DataHoraInicial",
      "data_type": "datetime",
      "max_length": 8,
      "numeric_precision": 23,
      "numeric_scale": 3,
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
    "DataHoraFinal": {
      "table": "tbl_OP_Loop_Tamboreamento",
      "name": "DataHoraFinal",
      "data_type": "datetime",
      "max_length": 8,
      "numeric_precision": 23,
      "numeric_scale": 3,
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
    "Tempo": {
      "table": "tbl_OP_Loop_Tamboreamento",
      "name": "Tempo",
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
    "fkFuncionario": {
      "table": "tbl_OP_Loop_Tamboreamento",
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
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "DataTamboreamento": {
      "table": "tbl_OP_Loop_Tamboreamento",
      "name": "DataTamboreamento",
      "data_type": "smalldatetime",
      "max_length": 4,
      "numeric_precision": 16,
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
