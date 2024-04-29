export type TtNaoConformidadeOperacaoProducao = keyof typeof tNaoConformidadeOperacaoProducao.fields

export const tNaoConformidadeOperacaoProducao = {
  "database": "oftalmo",
  "table": "tNaoConformidadeOperacaoProducao",
  "primary": [
    "kNaoConformidadeOP"
  ],
  "fields": {
    "kNaoConformidadeOP": {
      "table": "tNaoConformidadeOperacaoProducao",
      "name": "kNaoConformidadeOP",
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
    "fkOperacaoOP": {
      "table": "tNaoConformidadeOperacaoProducao",
      "name": "fkOperacaoOP",
      "data_type": "int",
      "max_length": 4,
      "numeric_precision": 10,
      "numeric_scale": null,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": "tOperacaoOrdemProducao",
      "foreign_key_column": "kOperacaoOP",
      "is_generated": false,
      "generation_expression": null
    },
    "Quantidade": {
      "table": "tNaoConformidadeOperacaoProducao",
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
    },
    "fkNaoConformidade": {
      "table": "tNaoConformidadeOperacaoProducao",
      "name": "fkNaoConformidade",
      "data_type": "int",
      "max_length": 4,
      "numeric_precision": 10,
      "numeric_scale": null,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": "tNaoConformidade",
      "foreign_key_column": "kNaoConformidade",
      "is_generated": false,
      "generation_expression": null
    },
    "fkCorrecao": {
      "table": "tNaoConformidadeOperacaoProducao",
      "name": "fkCorrecao",
      "data_type": "int",
      "max_length": 4,
      "numeric_precision": 10,
      "numeric_scale": null,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": "tCorrecaoNaoConformidade",
      "foreign_key_column": "kCorrecao",
      "is_generated": false,
      "generation_expression": null
    },
    "ts": {
      "table": "tNaoConformidadeOperacaoProducao",
      "name": "ts",
      "data_type": "timestamp",
      "max_length": 8,
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
    }
  }
}
  