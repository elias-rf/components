export type Tresource = keyof typeof resource.fields

export const resource = {
  "database": "sys",
  "table": "resource",
  "relations": {},
  "primary": [
    "resource_id"
  ],
  "fields": {
    "resource_id": {
      "name": "resource_id",
      "table": "resource",
      "data_type": "varchar",
      "default_value": null,
      "max_length": 50,
      "numeric_precision": null,
      "numeric_scale": null,
      "is_generated": false,
      "generation_expression": null,
      "is_nullable": false,
      "is_unique": true,
      "is_primary_key": true,
      "has_auto_increment": false,
      "foreign_key_column": null,
      "foreign_key_table": null
    },
    "description": {
      "name": "description",
      "table": "resource",
      "data_type": "varchar",
      "default_value": null,
      "max_length": 250,
      "numeric_precision": null,
      "numeric_scale": null,
      "is_generated": false,
      "generation_expression": null,
      "is_nullable": true,
      "is_unique": false,
      "is_primary_key": false,
      "has_auto_increment": false,
      "foreign_key_column": null,
      "foreign_key_table": null
    }
  }
}
  