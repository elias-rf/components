export type TProducaoEsterilizacaoMestre = keyof typeof ProducaoEsterilizacaoMestre.fields

export const ProducaoEsterilizacaoMestre = {
  "database": "plano",
  "table": "ProducaoEsterilizacaoMestre",
  "primary": [],
  "fields": {
    "CdFilial": {
      "table": "ProducaoEsterilizacaoMestre",
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
    "NumLoteEsterilizacao": {
      "table": "ProducaoEsterilizacaoMestre",
      "name": "NumLoteEsterilizacao",
      "data_type": "numeric",
      "max_length": 5,
      "numeric_precision": 9,
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
    "TipoEsterilizacao": {
      "table": "ProducaoEsterilizacaoMestre",
      "name": "TipoEsterilizacao",
      "data_type": "char",
      "max_length": 1,
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
    "DtEnvio": {
      "table": "ProducaoEsterilizacaoMestre",
      "name": "DtEnvio",
      "data_type": "datetime",
      "max_length": 8,
      "numeric_precision": 23,
      "numeric_scale": 3,
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
    "DtRetorno": {
      "table": "ProducaoEsterilizacaoMestre",
      "name": "DtRetorno",
      "data_type": "datetime",
      "max_length": 8,
      "numeric_precision": 23,
      "numeric_scale": 3,
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
    "Quantidade": {
      "table": "ProducaoEsterilizacaoMestre",
      "name": "Quantidade",
      "data_type": "numeric",
      "max_length": 5,
      "numeric_precision": 4,
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
    "Caixas": {
      "table": "ProducaoEsterilizacaoMestre",
      "name": "Caixas",
      "data_type": "numeric",
      "max_length": 5,
      "numeric_precision": 4,
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
    "Resultado": {
      "table": "ProducaoEsterilizacaoMestre",
      "name": "Resultado",
      "data_type": "varchar",
      "max_length": 512,
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
    "FgSituacao": {
      "table": "ProducaoEsterilizacaoMestre",
      "name": "FgSituacao",
      "data_type": "char",
      "max_length": 1,
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
  