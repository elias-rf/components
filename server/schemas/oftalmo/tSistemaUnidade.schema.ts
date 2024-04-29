export type TtSistemaUnidade = keyof typeof tSistemaUnidade.fields

export const tSistemaUnidade = {
  "database": "oftalmo",
  "table": "tSistemaUnidade",
  "primary": [
    "KUnidade"
  ],
  "fields": {
    "KUnidade": {
      "table": "tSistemaUnidade",
      "name": "KUnidade",
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
    "Abreviatura": {
      "table": "tSistemaUnidade",
      "name": "Abreviatura",
      "data_type": "varchar",
      "max_length": 5,
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
    "NomeUnidade": {
      "table": "tSistemaUnidade",
      "name": "NomeUnidade",
      "data_type": "varchar",
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
    }
  }
}
  