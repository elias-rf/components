export type TtLinhaDeProducao = keyof typeof tLinhaDeProducao.fields

export const tLinhaDeProducao = {
  "database": "oftalmo",
  "table": "tLinhaDeProducao",
  "primary": [
    "kLinhaDeProducao"
  ],
  "fields": {
    "kLinhaDeProducao": {
      "table": "tLinhaDeProducao",
      "name": "kLinhaDeProducao",
      "data_type": "tCodigoEmpresa",
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
    "LinhaDeProducao": {
      "table": "tLinhaDeProducao",
      "name": "LinhaDeProducao",
      "data_type": "char",
      "max_length": 30,
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
    "CalcularEmProcesso": {
      "table": "tLinhaDeProducao",
      "name": "CalcularEmProcesso",
      "data_type": "bit",
      "max_length": 1,
      "numeric_precision": 1,
      "numeric_scale": null,
      "is_nullable": false,
      "default_value": "1",
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "SolicitarLoteBotao": {
      "table": "tLinhaDeProducao",
      "name": "SolicitarLoteBotao",
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
    "fkOperacaoQtdEstExt": {
      "table": "tLinhaDeProducao",
      "name": "fkOperacaoQtdEstExt",
      "data_type": "int",
      "max_length": 4,
      "numeric_precision": 10,
      "numeric_scale": null,
      "is_nullable": true,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": "tOperacaoDeProducao",
      "foreign_key_column": "kOperacao",
      "is_generated": false,
      "generation_expression": null
    },
    "Descricao": {
      "table": "tLinhaDeProducao",
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
    }
  }
}
  