import { Schema } from "../schemas.type";

export const AgendaClientes: Schema =
  {
  "database": "plano",
  "table": "AgendaClientes",
  "primary": [
    "IdCompromisso"
  ],
  "fields": {
    "IdCompromisso": {
      "table": "AgendaClientes",
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
    "NmCliente": {
      "table": "AgendaClientes",
      "name": "NmCliente",
      "data_type": "varchar",
      "max_length": 40,
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
    "Telefone": {
      "table": "AgendaClientes",
      "name": "Telefone",
      "data_type": "varchar",
      "max_length": 18,
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
