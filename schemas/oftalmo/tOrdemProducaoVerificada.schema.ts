import { Schema } from "../schemas.type";

export const tOrdemProducaoVerificada: Schema =
  {
  "database": "oftalmo",
  "table": "tOrdemProducaoVerificada",
  "primary": [
    "kOP"
  ],
  "fields": {
    "kOP": {
      "table": "tOrdemProducaoVerificada",
      "name": "kOP",
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
    }
  }
}
