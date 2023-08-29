export type TRegiaoAtendimento = keyof typeof RegiaoAtendimento.fields

export const RegiaoAtendimento = {
  "database": "plano",
  "table": "RegiaoAtendimento",
  "primary": [
    "Regiao"
  ],
  "fields": {
    "Regiao": {
      "table": "RegiaoAtendimento",
      "name": "Regiao",
      "data_type": "varchar",
      "max_length": 10,
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
    "Descricao": {
      "table": "RegiaoAtendimento",
      "name": "Descricao",
      "data_type": "varchar",
      "max_length": 20,
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
  