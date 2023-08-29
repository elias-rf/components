export type TGrupoFornecedores = keyof typeof GrupoFornecedores.fields

export const GrupoFornecedores = {
  "database": "plano",
  "table": "GrupoFornecedores",
  "primary": [
    "CdGrupo"
  ],
  "fields": {
    "CdGrupo": {
      "table": "GrupoFornecedores",
      "name": "CdGrupo",
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
      "table": "GrupoFornecedores",
      "name": "Descricao",
      "data_type": "varchar",
      "max_length": 25,
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
  