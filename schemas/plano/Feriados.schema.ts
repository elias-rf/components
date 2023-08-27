import { Schema } from "../schemas.type";

export const Feriados: Schema =
  {
  "database": "plano",
  "table": "Feriados",
  "primary": [],
  "fields": {
    "CdCidade": {
      "table": "Feriados",
      "name": "CdCidade",
      "data_type": "int",
      "max_length": 4,
      "numeric_precision": 10,
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
    "DtFeriado": {
      "table": "Feriados",
      "name": "DtFeriado",
      "data_type": "datetime",
      "max_length": 8,
      "numeric_precision": 23,
      "numeric_scale": 3,
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
