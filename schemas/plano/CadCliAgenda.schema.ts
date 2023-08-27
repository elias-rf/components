import { Schema } from "../schemas.type";

export const CadCliAgenda: Schema =
  {
  "database": "plano",
  "table": "CadCliAgenda",
  "primary": [
    "CdCliente"
  ],
  "fields": {
    "CdCliente": {
      "table": "CadCliAgenda",
      "name": "CdCliente",
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
    "FgTeleAtivo": {
      "table": "CadCliAgenda",
      "name": "FgTeleAtivo",
      "data_type": "char",
      "max_length": 1,
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
    },
    "DtultContato": {
      "table": "CadCliAgenda",
      "name": "DtultContato",
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
