import { Schema } from "../schemas.type";

export const InstrucaoCobranca: Schema =
  {
  "database": "plano",
  "table": "InstrucaoCobranca",
  "primary": [],
  "fields": {
    "CdBanco": {
      "table": "InstrucaoCobranca",
      "name": "CdBanco",
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
    "CdInstrucaoCob": {
      "table": "InstrucaoCobranca",
      "name": "CdInstrucaoCob",
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
    "DsInstrucaoCob": {
      "table": "InstrucaoCobranca",
      "name": "DsInstrucaoCob",
      "data_type": "varchar",
      "max_length": 45,
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
