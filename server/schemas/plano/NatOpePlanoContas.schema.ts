export type TNatOpePlanoContas = keyof typeof NatOpePlanoContas.fields

export const NatOpePlanoContas = {
  "database": "plano",
  "table": "NatOpePlanoContas",
  "primary": [],
  "fields": {
    "Nop": {
      "table": "NatOpePlanoContas",
      "name": "Nop",
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
    "CdDepartamento": {
      "table": "NatOpePlanoContas",
      "name": "CdDepartamento",
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
    "NumConta": {
      "table": "NatOpePlanoContas",
      "name": "NumConta",
      "data_type": "numeric",
      "max_length": 9,
      "numeric_precision": 17,
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
  