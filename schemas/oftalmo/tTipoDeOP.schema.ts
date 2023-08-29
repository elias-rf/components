export type TtTipoDeOP = keyof typeof tTipoDeOP.fields

export const tTipoDeOP = {
  "database": "oftalmo",
  "table": "tTipoDeOP",
  "primary": [
    "kTipoOP"
  ],
  "fields": {
    "kTipoOP": {
      "table": "tTipoDeOP",
      "name": "kTipoOP",
      "data_type": "tCodigoEmpresa",
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
    "DescTipo": {
      "table": "tTipoDeOP",
      "name": "DescTipo",
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
  