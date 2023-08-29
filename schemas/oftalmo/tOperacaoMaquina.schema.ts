export type TtOperacaoMaquina = keyof typeof tOperacaoMaquina.fields

export const tOperacaoMaquina = {
  "database": "oftalmo",
  "table": "tOperacaoMaquina",
  "primary": [],
  "fields": {
    "fkOperacao": {
      "table": "tOperacaoMaquina",
      "name": "fkOperacao",
      "data_type": "int",
      "max_length": 4,
      "numeric_precision": 10,
      "numeric_scale": null,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": "tOperacaoDeProducao",
      "foreign_key_column": "kOperacao",
      "is_generated": false,
      "generation_expression": null
    },
    "fkMaquina": {
      "table": "tOperacaoMaquina",
      "name": "fkMaquina",
      "data_type": "char",
      "max_length": 30,
      "numeric_precision": null,
      "numeric_scale": null,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": "tMaquina",
      "foreign_key_column": "kMaquina",
      "is_generated": false,
      "generation_expression": null
    }
  }
}
  