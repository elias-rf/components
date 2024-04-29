export type TConfiguracaoFuncaoMestre = keyof typeof ConfiguracaoFuncaoMestre.fields

export const ConfiguracaoFuncaoMestre = {
  "database": "plano",
  "table": "ConfiguracaoFuncaoMestre",
  "primary": [
    "CdFuncao"
  ],
  "fields": {
    "CdFuncao": {
      "table": "ConfiguracaoFuncaoMestre",
      "name": "CdFuncao",
      "data_type": "varchar",
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
    "Descricao": {
      "table": "ConfiguracaoFuncaoMestre",
      "name": "Descricao",
      "data_type": "varchar",
      "max_length": 126,
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
  