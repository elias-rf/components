export type TPharmaLinkConvenios = keyof typeof PharmaLinkConvenios.fields

export const PharmaLinkConvenios = {
  "database": "plano",
  "table": "PharmaLinkConvenios",
  "primary": [
    "IdConvenio"
  ],
  "fields": {
    "IdConvenio": {
      "table": "PharmaLinkConvenios",
      "name": "IdConvenio",
      "data_type": "char",
      "max_length": 6,
      "numeric_precision": null,
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
    "Descricao": {
      "table": "PharmaLinkConvenios",
      "name": "Descricao",
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
    }
  }
}
  