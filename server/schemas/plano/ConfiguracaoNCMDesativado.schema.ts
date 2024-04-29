export type TConfiguracaoNCMDesativado = keyof typeof ConfiguracaoNCMDesativado.fields

export const ConfiguracaoNCMDesativado = {
  "database": "plano",
  "table": "ConfiguracaoNCMDesativado",
  "primary": [
    "NMC"
  ],
  "fields": {
    "NMC": {
      "table": "ConfiguracaoNCMDesativado",
      "name": "NMC",
      "data_type": "char",
      "max_length": 8,
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
    }
  }
}
  