export type TtOperacaoDeProducao = keyof typeof tOperacaoDeProducao.fields

export const tOperacaoDeProducao = {
  "database": "oftalmo",
  "table": "tOperacaoDeProducao",
  "primary": [
    "kOperacao"
  ],
  "fields": {
    "kOperacao": {
      "table": "tOperacaoDeProducao",
      "name": "kOperacao",
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
    "Operacao": {
      "table": "tOperacaoDeProducao",
      "name": "Operacao",
      "data_type": "char",
      "max_length": 50,
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
    "EhRetrabalho": {
      "table": "tOperacaoDeProducao",
      "name": "EhRetrabalho",
      "data_type": "bit",
      "max_length": 1,
      "numeric_precision": 1,
      "numeric_scale": null,
      "is_nullable": false,
      "default_value": "0",
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "Especial": {
      "table": "tOperacaoDeProducao",
      "name": "Especial",
      "data_type": "bit",
      "max_length": 1,
      "numeric_precision": 1,
      "numeric_scale": null,
      "is_nullable": false,
      "default_value": "0",
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "Descricao": {
      "table": "tOperacaoDeProducao",
      "name": "Descricao",
      "data_type": "tSmallMemo",
      "max_length": 200,
      "numeric_precision": null,
      "numeric_scale": null,
      "is_nullable": true,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "Amostragem": {
      "table": "tOperacaoDeProducao",
      "name": "Amostragem",
      "data_type": "bit",
      "max_length": 1,
      "numeric_precision": 1,
      "numeric_scale": null,
      "is_nullable": true,
      "default_value": "0",
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
  