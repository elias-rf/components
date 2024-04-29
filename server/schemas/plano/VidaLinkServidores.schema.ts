export type TVidaLinkServidores = keyof typeof VidaLinkServidores.fields

export const VidaLinkServidores = {
  "database": "plano",
  "table": "VidaLinkServidores",
  "primary": [
    "IdMaquina"
  ],
  "fields": {
    "IdMaquina": {
      "table": "VidaLinkServidores",
      "name": "IdMaquina",
      "data_type": "char",
      "max_length": 32,
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
    "NmServidor": {
      "table": "VidaLinkServidores",
      "name": "NmServidor",
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
  