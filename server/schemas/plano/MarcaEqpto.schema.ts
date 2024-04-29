export type TMarcaEqpto = keyof typeof MarcaEqpto.fields

export const MarcaEqpto = {
  "database": "plano",
  "table": "MarcaEqpto",
  "primary": [
    "CdMarcaEqpto"
  ],
  "fields": {
    "CdMarcaEqpto": {
      "table": "MarcaEqpto",
      "name": "CdMarcaEqpto",
      "data_type": "int",
      "max_length": 4,
      "numeric_precision": 10,
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
    "NmMarcaEqpto": {
      "table": "MarcaEqpto",
      "name": "NmMarcaEqpto",
      "data_type": "char",
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
    }
  }
}
  