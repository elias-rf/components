export type TSubstituicaoProd = keyof typeof SubstituicaoProd.fields

export const SubstituicaoProd = {
  "database": "plano",
  "table": "SubstituicaoProd",
  "primary": [],
  "fields": {
    "CdProduto": {
      "table": "SubstituicaoProd",
      "name": "CdProduto",
      "data_type": "varchar",
      "max_length": 15,
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
    "CdAssociado": {
      "table": "SubstituicaoProd",
      "name": "CdAssociado",
      "data_type": "varchar",
      "max_length": 15,
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
  