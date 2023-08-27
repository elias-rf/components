import { Schema } from "../schemas.type";

export const ComponentesCombo: Schema =
  {
  "database": "plano",
  "table": "ComponentesCombo",
  "primary": [
    "CdKit"
  ],
  "fields": {
    "CdKit": {
      "table": "ComponentesCombo",
      "name": "CdKit",
      "data_type": "varchar",
      "max_length": 18,
      "numeric_precision": null,
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
    "QtdeMinimaCombo": {
      "table": "ComponentesCombo",
      "name": "QtdeMinimaCombo",
      "data_type": "numeric",
      "max_length": 5,
      "numeric_precision": 9,
      "numeric_scale": 5,
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
    "QtdeMaximaCombo": {
      "table": "ComponentesCombo",
      "name": "QtdeMaximaCombo",
      "data_type": "numeric",
      "max_length": 5,
      "numeric_precision": 9,
      "numeric_scale": 5,
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
    "VlUnitarioCombo": {
      "table": "ComponentesCombo",
      "name": "VlUnitarioCombo",
      "data_type": "numeric",
      "max_length": 9,
      "numeric_precision": 12,
      "numeric_scale": 5,
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
    "DtUltAlteracao": {
      "table": "ComponentesCombo",
      "name": "DtUltAlteracao",
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
