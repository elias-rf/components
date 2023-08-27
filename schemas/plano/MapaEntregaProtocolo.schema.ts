import { Schema } from "../schemas.type";

export const MapaEntregaProtocolo: Schema =
  {
  "database": "plano",
  "table": "MapaEntregaProtocolo",
  "primary": [],
  "fields": {
    "CdMapaEntregaProtocolo": {
      "table": "MapaEntregaProtocolo",
      "name": "CdMapaEntregaProtocolo",
      "data_type": "smallint",
      "max_length": 2,
      "numeric_precision": 5,
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
    "DtProtocolo": {
      "table": "MapaEntregaProtocolo",
      "name": "DtProtocolo",
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
