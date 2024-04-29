export type Ttbl_Sistema_NCM = keyof typeof tbl_Sistema_NCM.fields

export const tbl_Sistema_NCM = {
  "database": "oftalmo",
  "table": "tbl_Sistema_NCM",
  "primary": [
    "KNCM"
  ],
  "fields": {
    "KNCM": {
      "table": "tbl_Sistema_NCM",
      "name": "KNCM",
      "data_type": "smallint",
      "max_length": 2,
      "numeric_precision": 5,
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
    "NCM": {
      "table": "tbl_Sistema_NCM",
      "name": "NCM",
      "data_type": "char",
      "max_length": 10,
      "numeric_precision": null,
      "numeric_scale": null,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": true,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "Descricao": {
      "table": "tbl_Sistema_NCM",
      "name": "Descricao",
      "data_type": "varchar",
      "max_length": 2000,
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
  