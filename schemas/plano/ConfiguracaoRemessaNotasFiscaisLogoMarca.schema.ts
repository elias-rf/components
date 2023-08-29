export type TConfiguracaoRemessaNotasFiscaisLogoMarca = keyof typeof ConfiguracaoRemessaNotasFiscaisLogoMarca.fields

export const ConfiguracaoRemessaNotasFiscaisLogoMarca = {
  "database": "plano",
  "table": "ConfiguracaoRemessaNotasFiscaisLogoMarca",
  "primary": [],
  "fields": {
    "CdEmpresa": {
      "table": "ConfiguracaoRemessaNotasFiscaisLogoMarca",
      "name": "CdEmpresa",
      "data_type": "numeric",
      "max_length": 9,
      "numeric_precision": 14,
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
    "CdFilial": {
      "table": "ConfiguracaoRemessaNotasFiscaisLogoMarca",
      "name": "CdFilial",
      "data_type": "numeric",
      "max_length": 9,
      "numeric_precision": 14,
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
    "Imagem": {
      "table": "ConfiguracaoRemessaNotasFiscaisLogoMarca",
      "name": "Imagem",
      "data_type": "image",
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
    }
  }
}
  