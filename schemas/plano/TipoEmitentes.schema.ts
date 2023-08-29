export type TTipoEmitentes = keyof typeof TipoEmitentes.fields

export const TipoEmitentes = {
  "database": "plano",
  "table": "TipoEmitentes",
  "primary": [
    "CdTipoEmitente"
  ],
  "fields": {
    "CdTipoEmitente": {
      "table": "TipoEmitentes",
      "name": "CdTipoEmitente",
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
    "NmTipoEmitente": {
      "table": "TipoEmitentes",
      "name": "NmTipoEmitente",
      "data_type": "varchar",
      "max_length": 40,
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
  