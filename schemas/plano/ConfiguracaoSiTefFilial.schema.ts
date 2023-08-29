export type TConfiguracaoSiTefFilial = keyof typeof ConfiguracaoSiTefFilial.fields

export const ConfiguracaoSiTefFilial = {
  "database": "plano",
  "table": "ConfiguracaoSiTefFilial",
  "primary": [
    "CdFilial"
  ],
  "fields": {
    "CdFilial": {
      "table": "ConfiguracaoSiTefFilial",
      "name": "CdFilial",
      "data_type": "numeric",
      "max_length": 9,
      "numeric_precision": 14,
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
    "IPSiTef": {
      "table": "ConfiguracaoSiTefFilial",
      "name": "IPSiTef",
      "data_type": "varchar",
      "max_length": 16,
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
    "IdLoja": {
      "table": "ConfiguracaoSiTefFilial",
      "name": "IdLoja",
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
    }
  }
}
  