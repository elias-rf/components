import { Schema } from "../schemas.type";

export const ProjetosConfiguracao: Schema =
  {
  "database": "plano",
  "table": "ProjetosConfiguracao",
  "primary": [
    "CdProjetosConfiguracao"
  ],
  "fields": {
    "CdProjetosConfiguracao": {
      "table": "ProjetosConfiguracao",
      "name": "CdProjetosConfiguracao",
      "data_type": "numeric",
      "max_length": 9,
      "numeric_precision": 18,
      "numeric_scale": null,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": true,
      "is_unique": true,
      "has_auto_increment": true,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "CdProjeto": {
      "table": "ProjetosConfiguracao",
      "name": "CdProjeto",
      "data_type": "numeric",
      "max_length": 9,
      "numeric_precision": 18,
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
      "table": "ProjetosConfiguracao",
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
      "table": "ProjetosConfiguracao",
      "name": "QtdeProduto",
      "data_type": "money",
      "max_length": 8,
      "numeric_precision": 19,
      "numeric_scale": 4,
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
    "PercQtde": {
      "table": "ProjetosConfiguracao",
      "name": "PercQtde",
      "data_type": "money",
      "max_length": 8,
      "numeric_precision": 19,
      "numeric_scale": 4,
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
    "CRM": {
      "table": "ProjetosConfiguracao",
      "name": "CRM",
      "data_type": "varchar",
      "max_length": 15,
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
    "PercCRM": {
      "table": "ProjetosConfiguracao",
      "name": "PercCRM",
      "data_type": "money",
      "max_length": 8,
      "numeric_precision": 19,
      "numeric_scale": 4,
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
