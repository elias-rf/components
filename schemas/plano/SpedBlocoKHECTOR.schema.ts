export type TSpedBlocoKHECTOR = keyof typeof SpedBlocoKHECTOR.fields

export const SpedBlocoKHECTOR = {
  "database": "plano",
  "table": "SpedBlocoKHECTOR",
  "primary": [
    "CdProduto"
  ],
  "fields": {
    "CdProduto": {
      "table": "SpedBlocoKHECTOR",
      "name": "CdProduto",
      "data_type": "varchar",
      "max_length": 16,
      "numeric_precision": null,
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
    "Quantidade": {
      "table": "SpedBlocoKHECTOR",
      "name": "Quantidade",
      "data_type": "money",
      "max_length": 8,
      "numeric_precision": 19,
      "numeric_scale": 4,
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
  