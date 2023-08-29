export type TParametrosComandoSQL = keyof typeof ParametrosComandoSQL.fields

export const ParametrosComandoSQL = {
  "database": "plano",
  "table": "ParametrosComandoSQL",
  "primary": [
    "IdComando"
  ],
  "fields": {
    "IdComando": {
      "table": "ParametrosComandoSQL",
      "name": "IdComando",
      "data_type": "varchar",
      "max_length": 128,
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
    "Comando": {
      "table": "ParametrosComandoSQL",
      "name": "Comando",
      "data_type": "varchar",
      "max_length": 5140,
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
  