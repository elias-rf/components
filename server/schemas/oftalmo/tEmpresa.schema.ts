export type TtEmpresa = keyof typeof tEmpresa.fields

export const tEmpresa = {
  "database": "oftalmo",
  "table": "tEmpresa",
  "primary": [
    "kEmpresa"
  ],
  "fields": {
    "kEmpresa": {
      "table": "tEmpresa",
      "name": "kEmpresa",
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
    "NomeEmpresa": {
      "table": "tEmpresa",
      "name": "NomeEmpresa",
      "data_type": "varchar",
      "max_length": 35,
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
    "CNPJ": {
      "table": "tEmpresa",
      "name": "CNPJ",
      "data_type": "char",
      "max_length": 14,
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
  