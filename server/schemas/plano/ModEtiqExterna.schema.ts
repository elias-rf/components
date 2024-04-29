export type TModEtiqExterna = keyof typeof ModEtiqExterna.fields

export const ModEtiqExterna = {
  "database": "plano",
  "table": "ModEtiqExterna",
  "primary": [
    "Codigo"
  ],
  "fields": {
    "Codigo": {
      "table": "ModEtiqExterna",
      "name": "Codigo",
      "data_type": "numeric",
      "max_length": 5,
      "numeric_precision": 4,
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
    "Descricao": {
      "table": "ModEtiqExterna",
      "name": "Descricao",
      "data_type": "varchar",
      "max_length": 64,
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
  