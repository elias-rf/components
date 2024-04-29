export type Ttbl_Solucao_Controle_Lote = keyof typeof tbl_Solucao_Controle_Lote.fields

export const tbl_Solucao_Controle_Lote = {
  "database": "oftalmo",
  "table": "tbl_Solucao_Controle_Lote",
  "primary": [],
  "fields": {
    "fkProdutoItem": {
      "table": "tbl_Solucao_Controle_Lote",
      "name": "fkProdutoItem",
      "data_type": "int",
      "max_length": 4,
      "numeric_precision": 10,
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
    "Quantidade": {
      "table": "tbl_Solucao_Controle_Lote",
      "name": "Quantidade",
      "data_type": "int",
      "max_length": 4,
      "numeric_precision": 10,
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
    "Lote": {
      "table": "tbl_Solucao_Controle_Lote",
      "name": "Lote",
      "data_type": "char",
      "max_length": 10,
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
    }
  }
}
  