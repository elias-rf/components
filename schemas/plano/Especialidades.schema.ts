export type TEspecialidades = keyof typeof Especialidades.fields

export const Especialidades = {
  "database": "plano",
  "table": "Especialidades",
  "primary": [
    "CdEspecialidade"
  ],
  "fields": {
    "CdEspecialidade": {
      "table": "Especialidades",
      "name": "CdEspecialidade",
      "data_type": "smallint",
      "max_length": 2,
      "numeric_precision": 5,
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
    "DsEspecialidade": {
      "table": "Especialidades",
      "name": "DsEspecialidade",
      "data_type": "char",
      "max_length": 30,
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
  