import { Schema } from "../schemas.type";

export const LimiteAcrescimoComissao: Schema =
  {
  "database": "plano",
  "table": "LimiteAcrescimoComissao",
  "primary": [
    "PercLimite"
  ],
  "fields": {
    "PercLimite": {
      "table": "LimiteAcrescimoComissao",
      "name": "PercLimite",
      "data_type": "money",
      "max_length": 8,
      "numeric_precision": 19,
      "numeric_scale": 4,
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
    "PercAcrescimo": {
      "table": "LimiteAcrescimoComissao",
      "name": "PercAcrescimo",
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
