export type TSegmentosProdutos = keyof typeof SegmentosProdutos.fields

export const SegmentosProdutos = {
  "database": "plano",
  "table": "SegmentosProdutos",
  "primary": [],
  "fields": {
    "CdProduto": {
      "table": "SegmentosProdutos",
      "name": "CdProduto",
      "data_type": "varchar",
      "max_length": 15,
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
    "CdSegmento": {
      "table": "SegmentosProdutos",
      "name": "CdSegmento",
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
    }
  }
}
  