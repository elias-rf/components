export type TProducaoOperacaoMaquina = keyof typeof ProducaoOperacaoMaquina.fields

export const ProducaoOperacaoMaquina = {
  "database": "plano",
  "table": "ProducaoOperacaoMaquina",
  "primary": [],
  "fields": {
    "CdOperacao": {
      "table": "ProducaoOperacaoMaquina",
      "name": "CdOperacao",
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
    "CdMaquina": {
      "table": "ProducaoOperacaoMaquina",
      "name": "CdMaquina",
      "data_type": "varchar",
      "max_length": 8,
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
  