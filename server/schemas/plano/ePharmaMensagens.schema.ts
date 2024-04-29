export type TePharmaMensagens = keyof typeof ePharmaMensagens.fields

export const ePharmaMensagens = {
  "database": "plano",
  "table": "ePharmaMensagens",
  "primary": [
    "CdMensagem"
  ],
  "fields": {
    "CdMensagem": {
      "table": "ePharmaMensagens",
      "name": "CdMensagem",
      "data_type": "char",
      "max_length": 2,
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
    "DescricaoMensagem": {
      "table": "ePharmaMensagens",
      "name": "DescricaoMensagem",
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
    }
  }
}
  