export type Ttbl_producao_etiqueta = keyof typeof tbl_producao_etiqueta.fields

export const tbl_producao_etiqueta = {
  "database": "oftalmo",
  "table": "tbl_producao_etiqueta",
  "primary": [
    "NumControle"
  ],
  "fields": {
    "NumControle": {
      "table": "tbl_producao_etiqueta",
      "name": "NumControle",
      "data_type": "char",
      "max_length": 18,
      "numeric_precision": null,
      "numeric_scale": null,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": true,
      "is_unique": true,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "fkProdutoItem": {
      "table": "tbl_producao_etiqueta",
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
    "DataInsercao": {
      "table": "tbl_producao_etiqueta",
      "name": "DataInsercao",
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
  