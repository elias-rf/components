export type TProducaoOperador = keyof typeof ProducaoOperador.fields

export const ProducaoOperador = {
  "database": "plano",
  "table": "ProducaoOperador",
  "primary": [
    "CdOperador"
  ],
  "fields": {
    "CdOperador": {
      "table": "ProducaoOperador",
      "name": "CdOperador",
      "data_type": "numeric",
      "max_length": 5,
      "numeric_precision": 8,
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
    "NmOperador": {
      "table": "ProducaoOperador",
      "name": "NmOperador",
      "data_type": "varchar",
      "max_length": 64,
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
    "FgAtivo": {
      "table": "ProducaoOperador",
      "name": "FgAtivo",
      "data_type": "char",
      "max_length": 1,
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
  