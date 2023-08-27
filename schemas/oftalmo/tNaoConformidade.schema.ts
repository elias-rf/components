import { Schema } from "../schemas.type";

export const tNaoConformidade: Schema =
  {
  "database": "oftalmo",
  "table": "tNaoConformidade",
  "primary": [
    "kNaoConformidade"
  ],
  "fields": {
    "kNaoConformidade": {
      "table": "tNaoConformidade",
      "name": "kNaoConformidade",
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
    "NaoConformidade": {
      "table": "tNaoConformidade",
      "name": "NaoConformidade",
      "data_type": "char",
      "max_length": 30,
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
    "Descricao": {
      "table": "tNaoConformidade",
      "name": "Descricao",
      "data_type": "tSmallMemo",
      "max_length": 200,
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
    "Enable": {
      "table": "tNaoConformidade",
      "name": "Enable",
      "data_type": "bit",
      "max_length": 1,
      "numeric_precision": 1,
      "numeric_scale": null,
      "is_nullable": false,
      "default_value": "1",
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
