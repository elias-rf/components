import { Schema } from "../schemas.type";

export const tSistemaMesVT: Schema =
  {
  "database": "plano",
  "table": "tSistemaMesVT",
  "primary": [
    "Dia"
  ],
  "fields": {
    "Dia": {
      "table": "tSistemaMesVT",
      "name": "Dia",
      "data_type": "smalldatetime",
      "max_length": 4,
      "numeric_precision": 16,
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
    "MesVT": {
      "table": "tSistemaMesVT",
      "name": "MesVT",
      "data_type": "smalldatetime",
      "max_length": 4,
      "numeric_precision": 16,
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
    "Feriado": {
      "table": "tSistemaMesVT",
      "name": "Feriado",
      "data_type": "tinyint",
      "max_length": 1,
      "numeric_precision": 3,
      "numeric_scale": null,
      "is_nullable": false,
      "default_value": "0",
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "ano": {
      "table": "tSistemaMesVT",
      "name": "ano",
      "data_type": "char",
      "max_length": 4,
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
    },
    "mes": {
      "table": "tSistemaMesVT",
      "name": "mes",
      "data_type": "char",
      "max_length": 2,
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
