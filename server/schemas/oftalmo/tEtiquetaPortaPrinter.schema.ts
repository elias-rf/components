export type TtEtiquetaPortaPrinter = keyof typeof tEtiquetaPortaPrinter.fields

export const tEtiquetaPortaPrinter = {
  "database": "oftalmo",
  "table": "tEtiquetaPortaPrinter",
  "primary": [],
  "fields": {
    "Port": {
      "table": "tEtiquetaPortaPrinter",
      "name": "Port",
      "data_type": "char",
      "max_length": 5,
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
    "Descricao": {
      "table": "tEtiquetaPortaPrinter",
      "name": "Descricao",
      "data_type": "varchar",
      "max_length": 50,
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
  