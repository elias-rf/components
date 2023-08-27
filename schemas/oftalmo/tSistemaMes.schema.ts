import { Schema } from "../schemas.type";

export const tSistemaMes: Schema =
  {
  "database": "oftalmo",
  "table": "tSistemaMes",
  "primary": [
    "Mes"
  ],
  "fields": {
    "Mes": {
      "table": "tSistemaMes",
      "name": "Mes",
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
    "DiaInicial": {
      "table": "tSistemaMes",
      "name": "DiaInicial",
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
    "DiaFinal": {
      "table": "tSistemaMes",
      "name": "DiaFinal",
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
    "DiaInicialCornea": {
      "table": "tSistemaMes",
      "name": "DiaInicialCornea",
      "data_type": "smalldatetime",
      "max_length": 4,
      "numeric_precision": 16,
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
    "DiaFinalCornea": {
      "table": "tSistemaMes",
      "name": "DiaFinalCornea",
      "data_type": "smalldatetime",
      "max_length": 4,
      "numeric_precision": 16,
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
    "QtdDiasMes": {
      "table": "tSistemaMes",
      "name": "QtdDiasMes",
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
      "is_generated": true,
      "generation_expression": "(datediff(day,[DiaInicial],[DiaFinal]) + 1)"
    }
  }
}
