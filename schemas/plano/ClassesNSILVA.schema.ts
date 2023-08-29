export type TClassesNSILVA = keyof typeof ClassesNSILVA.fields

export const ClassesNSILVA = {
  "database": "plano",
  "table": "ClassesNSILVA",
  "primary": [
    "NumConta"
  ],
  "fields": {
    "NumConta": {
      "table": "ClassesNSILVA",
      "name": "NumConta",
      "data_type": "numeric",
      "max_length": 9,
      "numeric_precision": 17,
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
    "Tipo": {
      "table": "ClassesNSILVA",
      "name": "Tipo",
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
    "Valor": {
      "table": "ClassesNSILVA",
      "name": "Valor",
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
  