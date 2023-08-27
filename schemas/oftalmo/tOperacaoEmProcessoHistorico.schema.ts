import { Schema } from "../schemas.type";

export const tOperacaoEmProcessoHistorico: Schema =
  {
  "database": "oftalmo",
  "table": "tOperacaoEmProcessoHistorico",
  "primary": [
    "kOperacaoEPH"
  ],
  "fields": {
    "kOperacaoEPH": {
      "table": "tOperacaoEmProcessoHistorico",
      "name": "kOperacaoEPH",
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
    "DataRegistro": {
      "table": "tOperacaoEmProcessoHistorico",
      "name": "DataRegistro",
      "data_type": "smalldatetime",
      "max_length": 4,
      "numeric_precision": 16,
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
    "fkLinhaDeProducao": {
      "table": "tOperacaoEmProcessoHistorico",
      "name": "fkLinhaDeProducao",
      "data_type": "int",
      "max_length": 4,
      "numeric_precision": 10,
      "numeric_scale": null,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": "tLinhaDeProducao",
      "foreign_key_column": "kLinhaDeProducao",
      "is_generated": false,
      "generation_expression": null
    },
    "fkOperacao": {
      "table": "tOperacaoEmProcessoHistorico",
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
      "table": "tOperacaoEmProcessoHistorico",
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
