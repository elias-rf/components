import { Schema } from "../schemas.type";

export const AgendaCancelamento: Schema =
  {
  "database": "plano",
  "table": "AgendaCancelamento",
  "primary": [
    "IdCompromisso"
  ],
  "fields": {
    "CdUsuario": {
      "table": "AgendaCancelamento",
      "name": "CdUsuario",
      "data_type": "varchar",
      "max_length": 10,
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
    "IdCompromisso": {
      "table": "AgendaCancelamento",
      "name": "IdCompromisso",
      "data_type": "int",
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
    "CdResponsavel": {
      "table": "AgendaCancelamento",
      "name": "CdResponsavel",
      "data_type": "varchar",
      "max_length": 10,
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
    "DtCancelamento": {
      "table": "AgendaCancelamento",
      "name": "DtCancelamento",
      "data_type": "datetime",
      "max_length": 8,
      "numeric_precision": 23,
      "numeric_scale": 3,
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
    "HrCancelamento": {
      "table": "AgendaCancelamento",
      "name": "HrCancelamento",
      "data_type": "datetime",
      "max_length": 8,
      "numeric_precision": 23,
      "numeric_scale": 3,
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
    "DsMotivoCancelamento": {
      "table": "AgendaCancelamento",
      "name": "DsMotivoCancelamento",
      "data_type": "varchar",
      "max_length": 1024,
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
