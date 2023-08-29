export type TEquipamentos = keyof typeof Equipamentos.fields

export const Equipamentos = {
  "database": "plano",
  "table": "Equipamentos",
  "primary": [
    "CdEquipamento"
  ],
  "fields": {
    "CdEquipamento": {
      "table": "Equipamentos",
      "name": "CdEquipamento",
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
    "NmEquipamento": {
      "table": "Equipamentos",
      "name": "NmEquipamento",
      "data_type": "varchar",
      "max_length": 40,
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
  