export type TtOperacaoEmProcesso = keyof typeof tOperacaoEmProcesso.fields

export const tOperacaoEmProcesso = {
  "database": "oftalmo",
  "table": "tOperacaoEmProcesso",
  "primary": [
    "kOperacaoEP"
  ],
  "fields": {
    "kOperacaoEP": {
      "table": "tOperacaoEmProcesso",
      "name": "kOperacaoEP",
      "data_type": "int",
      "max_length": 4,
      "numeric_precision": 10,
      "numeric_scale": null,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": true,
      "is_unique": true,
      "has_auto_increment": true,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "fkOP": {
      "table": "tOperacaoEmProcesso",
      "name": "fkOP",
      "data_type": "int",
      "max_length": 4,
      "numeric_precision": 10,
      "numeric_scale": null,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": "tOrdemProducao",
      "foreign_key_column": "kOp",
      "is_generated": false,
      "generation_expression": null
    },
    "fkOperacao": {
      "table": "tOperacaoEmProcesso",
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
    "Quantidade": {
      "table": "tOperacaoEmProcesso",
      "name": "Quantidade",
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
  