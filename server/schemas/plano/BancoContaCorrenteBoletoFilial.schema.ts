export type TBancoContaCorrenteBoletoFilial = keyof typeof BancoContaCorrenteBoletoFilial.fields

export const BancoContaCorrenteBoletoFilial = {
  "database": "plano",
  "table": "BancoContaCorrenteBoletoFilial",
  "primary": [],
  "fields": {
    "NumBanco": {
      "table": "BancoContaCorrenteBoletoFilial",
      "name": "NumBanco",
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
    "NumAgencia": {
      "table": "BancoContaCorrenteBoletoFilial",
      "name": "NumAgencia",
      "data_type": "numeric",
      "max_length": 5,
      "numeric_precision": 6,
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
    "NumContaCorrente": {
      "table": "BancoContaCorrenteBoletoFilial",
      "name": "NumContaCorrente",
      "data_type": "varchar",
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
    },
    "CdFilial": {
      "table": "BancoContaCorrenteBoletoFilial",
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
    }
  }
}
  