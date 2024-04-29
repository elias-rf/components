export type TSinonimos = keyof typeof Sinonimos.fields

export const Sinonimos = {
  "database": "plano",
  "table": "Sinonimos",
  "primary": [],
  "fields": {
    "Sinonimo": {
      "table": "Sinonimos",
      "name": "Sinonimo",
      "data_type": "varchar",
      "max_length": 40,
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
    "CdProdutoAssociado": {
      "table": "Sinonimos",
      "name": "CdProdutoAssociado",
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
    }
  }
}
  