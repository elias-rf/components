export type TVidaLinkConvenios = keyof typeof VidaLinkConvenios.fields

export const VidaLinkConvenios = {
  "database": "plano",
  "table": "VidaLinkConvenios",
  "primary": [
    "IdConvenio"
  ],
  "fields": {
    "IdConvenio": {
      "table": "VidaLinkConvenios",
      "name": "IdConvenio",
      "data_type": "char",
      "max_length": 10,
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
      "table": "VidaLinkConvenios",
      "name": "Descricao",
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
  