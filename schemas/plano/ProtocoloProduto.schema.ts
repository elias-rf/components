import { Schema } from "../schemas.type";

export const ProtocoloProduto: Schema =
  {
  "database": "plano",
  "table": "ProtocoloProduto",
  "primary": [],
  "fields": {
    "CdProtocolo": {
      "table": "ProtocoloProduto",
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
    "CdProduto": {
      "table": "ProtocoloProduto",
      "name": "CdProduto",
      "data_type": "varchar",
      "max_length": 16,
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
    "QtdeProduto": {
      "table": "ProtocoloProduto",
      "name": "QtdeProduto",
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
    "FgEnviaRetornar": {
      "table": "ProtocoloProduto",
      "name": "FgEnviaRetornar",
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
    }
  }
}
