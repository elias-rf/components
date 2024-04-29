export type Ttbl_Solucao_Rastreabilidade_Saida = keyof typeof tbl_Solucao_Rastreabilidade_Saida.fields

export const tbl_Solucao_Rastreabilidade_Saida = {
  "database": "oftalmo",
  "table": "tbl_Solucao_Rastreabilidade_Saida",
  "primary": [
    "kRastreabilidade"
  ],
  "fields": {
    "kRastreabilidade": {
      "table": "tbl_Solucao_Rastreabilidade_Saida",
      "name": "kRastreabilidade",
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
    "fkSaida": {
      "table": "tbl_Solucao_Rastreabilidade_Saida",
      "name": "fkSaida",
      "data_type": "tCodigoEmpresa",
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
    "fkProdutoItem": {
      "table": "tbl_Solucao_Rastreabilidade_Saida",
      "name": "fkProdutoItem",
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
    "Lote": {
      "table": "tbl_Solucao_Rastreabilidade_Saida",
      "name": "Lote",
      "data_type": "char",
      "max_length": 10,
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
    "Quantidade": {
      "table": "tbl_Solucao_Rastreabilidade_Saida",
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
    }
  }
}
  