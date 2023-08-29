export type TControleSerieRat = keyof typeof ControleSerieRat.fields

export const ControleSerieRat = {
  "database": "plano",
  "table": "ControleSerieRat",
  "primary": [],
  "fields": {
    "CdCliente": {
      "table": "ControleSerieRat",
      "name": "CdCliente",
      "data_type": "money",
      "max_length": 8,
      "numeric_precision": 19,
      "numeric_scale": 4,
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
    "NumSerie": {
      "table": "ControleSerieRat",
      "name": "NumSerie",
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
  