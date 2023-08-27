import { Schema } from "../schemas.type";

export const AcumuladoresParciais: Schema =
  {
  "database": "plano",
  "table": "AcumuladoresParciais",
  "primary": [],
  "fields": {
    "CdAcumuladorParcial": {
      "table": "AcumuladoresParciais",
      "name": "CdAcumuladorParcial",
      "data_type": "int",
      "max_length": 4,
      "numeric_precision": 10,
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
    },
    "Descricao": {
      "table": "AcumuladoresParciais",
      "name": "Descricao",
      "data_type": "varchar",
      "max_length": 50,
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
