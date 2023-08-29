export type Ttbl_OP_LIO_Conformidade = keyof typeof tbl_OP_LIO_Conformidade.fields

export const tbl_OP_LIO_Conformidade = {
  "database": "oftalmo",
  "table": "tbl_OP_LIO_Conformidade",
  "primary": [
    "kOpLIOConformidade"
  ],
  "fields": {
    "kOpLIOConformidade": {
      "table": "tbl_OP_LIO_Conformidade",
      "name": "kOpLIOConformidade",
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
      "table": "tbl_OP_LIO_Conformidade",
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
      "table": "tbl_OP_LIO_Conformidade",
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
    "Conformidade": {
      "table": "tbl_OP_LIO_Conformidade",
      "name": "Conformidade",
      "data_type": "varchar",
      "max_length": 100,
      "numeric_precision": null,
      "numeric_scale": null,
      "is_nullable": true,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": "tbl_OP_Conformidade_tipo",
      "foreign_key_column": "kConformidade",
      "is_generated": false,
      "generation_expression": null
    },
    "Analise": {
      "table": "tbl_OP_LIO_Conformidade",
      "name": "Analise",
      "data_type": "varchar",
      "max_length": 100,
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
    "fkOperacao": {
      "table": "tbl_OP_LIO_Conformidade",
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
    "Disposicao": {
      "table": "tbl_OP_LIO_Conformidade",
      "name": "Disposicao",
      "data_type": "varchar",
      "max_length": 100,
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
    "ConformidadeAntigo": {
      "table": "tbl_OP_LIO_Conformidade",
      "name": "ConformidadeAntigo",
      "data_type": "varchar",
      "max_length": 100,
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
    "DisposicaoAntigo": {
      "table": "tbl_OP_LIO_Conformidade",
      "name": "DisposicaoAntigo",
      "data_type": "varchar",
      "max_length": 100,
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
  