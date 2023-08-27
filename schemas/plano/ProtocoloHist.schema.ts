import { Schema } from "../schemas.type";

export const ProtocoloHist: Schema =
  {
  "database": "plano",
  "table": "ProtocoloHist",
  "primary": [
    "CdProtocoloHist"
  ],
  "fields": {
    "CdProtocoloHist": {
      "table": "ProtocoloHist",
      "name": "CdProtocoloHist",
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
    "CdProtocolo": {
      "table": "ProtocoloHist",
      "name": "CdProtocolo",
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
    "Historico": {
      "table": "ProtocoloHist",
      "name": "Historico",
      "data_type": "varchar",
      "max_length": 1000,
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
