export type TtMaquinaCheckList = keyof typeof tMaquinaCheckList.fields

export const tMaquinaCheckList = {
  "database": "oftalmo",
  "table": "tMaquinaCheckList",
  "primary": [],
  "fields": {
    "fkMaquina": {
      "table": "tMaquinaCheckList",
      "name": "fkMaquina",
      "data_type": "char",
      "max_length": 30,
      "numeric_precision": null,
      "numeric_scale": null,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": "tMaquina",
      "foreign_key_column": "kMaquina",
      "is_generated": false,
      "generation_expression": null
    },
    "fkMaquinaCheckListItem": {
      "table": "tMaquinaCheckList",
      "name": "fkMaquinaCheckListItem",
      "data_type": "int",
      "max_length": 4,
      "numeric_precision": 10,
      "numeric_scale": null,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": "tMaquinaCheckListItem",
      "foreign_key_column": "kMaquinaCheckListItem",
      "is_generated": false,
      "generation_expression": null
    }
  }
}
  