export type TNatOpePlanoContasNota = keyof typeof NatOpePlanoContasNota.fields

export const NatOpePlanoContasNota = {
  "database": "plano",
  "table": "NatOpePlanoContasNota",
  "primary": [],
  "fields": {
    "Nop": {
      "table": "NatOpePlanoContasNota",
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
      "table": "NatOpePlanoContasNota",
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
      "table": "NatOpePlanoContasNota",
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
  