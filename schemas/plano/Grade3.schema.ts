import { Schema } from "../schemas.type";

export const Grade3: Schema =
  {
  "database": "plano",
  "table": "Grade3",
  "primary": [
    "CdGrade3"
  ],
  "fields": {
    "CdGrade3": {
      "table": "Grade3",
      "name": "CdGrade3",
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
    "Descricao": {
      "table": "Grade3",
      "name": "Descricao",
      "data_type": "varchar",
      "max_length": 20,
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
