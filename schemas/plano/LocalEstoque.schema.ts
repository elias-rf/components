export type TLocalEstoque = keyof typeof LocalEstoque.fields

export const LocalEstoque = {
  "database": "plano",
  "table": "LocalEstoque",
  "primary": [
    "CdLocalEstoque"
  ],
  "fields": {
    "CdLocalEstoque": {
      "table": "LocalEstoque",
      "name": "CdLocalEstoque",
      "data_type": "smallint",
      "max_length": 2,
      "numeric_precision": 5,
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
    "NmLocalEstoque": {
      "table": "LocalEstoque",
      "name": "NmLocalEstoque",
      "data_type": "char",
      "max_length": 40,
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
  