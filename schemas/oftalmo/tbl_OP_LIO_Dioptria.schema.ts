export type Ttbl_OP_LIO_Dioptria = keyof typeof tbl_OP_LIO_Dioptria.fields

export const tbl_OP_LIO_Dioptria = {
  "database": "oftalmo",
  "table": "tbl_OP_LIO_Dioptria",
  "primary": [
    "kOpLIODioptria"
  ],
  "fields": {
    "kOpLIODioptria": {
      "table": "tbl_OP_LIO_Dioptria",
      "name": "kOpLIODioptria",
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
    "fkOpLIO": {
      "table": "tbl_OP_LIO_Dioptria",
      "name": "fkOpLIO",
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
    "Quantidade": {
      "table": "tbl_OP_LIO_Dioptria",
      "name": "Quantidade",
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
    "Dioptria": {
      "table": "tbl_OP_LIO_Dioptria",
      "name": "Dioptria",
      "data_type": "real",
      "max_length": 4,
      "numeric_precision": 24,
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
    "Controle": {
      "table": "tbl_OP_LIO_Dioptria",
      "name": "Controle",
      "data_type": "char",
      "max_length": 11,
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
    "Esterilizacao": {
      "table": "tbl_OP_LIO_Dioptria",
      "name": "Esterilizacao",
      "data_type": "char",
      "max_length": 4,
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
    "fkprodutoitem": {
      "table": "tbl_OP_LIO_Dioptria",
      "name": "fkprodutoitem",
      "data_type": "int",
      "max_length": 4,
      "numeric_precision": 10,
      "numeric_scale": null,
      "is_nullable": true,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": "tbl_Produto_Item",
      "foreign_key_column": "kProdutoItem",
      "is_generated": false,
      "generation_expression": null
    },
    "DataFabricacao": {
      "table": "tbl_OP_LIO_Dioptria",
      "name": "DataFabricacao",
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
    "Partida": {
      "table": "tbl_OP_LIO_Dioptria",
      "name": "Partida",
      "data_type": "tinyint",
      "max_length": 1,
      "numeric_precision": 3,
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
    "QtdProduzida": {
      "table": "tbl_OP_LIO_Dioptria",
      "name": "QtdProduzida",
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
    }
  }
}
  