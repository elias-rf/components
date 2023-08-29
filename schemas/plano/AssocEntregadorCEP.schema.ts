export type TAssocEntregadorCEP = keyof typeof AssocEntregadorCEP.fields

export const AssocEntregadorCEP = {
  "database": "plano",
  "table": "AssocEntregadorCEP",
  "primary": [],
  "fields": {
    "CdEmitente": {
      "table": "AssocEntregadorCEP",
      "name": "CdEmitente",
      "data_type": "money",
      "max_length": 8,
      "numeric_precision": 19,
      "numeric_scale": 4,
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
    "CEPInicial": {
      "table": "AssocEntregadorCEP",
      "name": "CEPInicial",
      "data_type": "varchar",
      "max_length": 8,
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
    "CEPFinal": {
      "table": "AssocEntregadorCEP",
      "name": "CEPFinal",
      "data_type": "char",
      "max_length": 8,
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
  