export type TParametrosMediaImposto = keyof typeof ParametrosMediaImposto.fields

export const ParametrosMediaImposto = {
  "database": "plano",
  "table": "ParametrosMediaImposto",
  "primary": [],
  "fields": {
    "TipoTabela": {
      "table": "ParametrosMediaImposto",
      "name": "TipoTabela",
      "data_type": "numeric",
      "max_length": 5,
      "numeric_precision": 1,
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
    "CodigoNCMNBS": {
      "table": "ParametrosMediaImposto",
      "name": "CodigoNCMNBS",
      "data_type": "numeric",
      "max_length": 5,
      "numeric_precision": 8,
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
    "CodigoEX": {
      "table": "ParametrosMediaImposto",
      "name": "CodigoEX",
      "data_type": "char",
      "max_length": 2,
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
    "UF": {
      "table": "ParametrosMediaImposto",
      "name": "UF",
      "data_type": "char",
      "max_length": 2,
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
    "PercFederalNacional": {
      "table": "ParametrosMediaImposto",
      "name": "PercFederalNacional",
      "data_type": "numeric",
      "max_length": 5,
      "numeric_precision": 5,
      "numeric_scale": 2,
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
    "PercFederalImportado": {
      "table": "ParametrosMediaImposto",
      "name": "PercFederalImportado",
      "data_type": "numeric",
      "max_length": 5,
      "numeric_precision": 5,
      "numeric_scale": 2,
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
    "PercEstadual": {
      "table": "ParametrosMediaImposto",
      "name": "PercEstadual",
      "data_type": "numeric",
      "max_length": 5,
      "numeric_precision": 5,
      "numeric_scale": 2,
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
    "PercMunicipal": {
      "table": "ParametrosMediaImposto",
      "name": "PercMunicipal",
      "data_type": "numeric",
      "max_length": 5,
      "numeric_precision": 5,
      "numeric_scale": 2,
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
      "table": "ParametrosMediaImposto",
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
  