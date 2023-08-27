import { Schema } from "../schemas.type";

export const ProdutosCodAuxiliar: Schema =
  {
  "database": "plano",
  "table": "ProdutosCodAuxiliar",
  "primary": [],
  "fields": {
    "CdProduto": {
      "table": "ProdutosCodAuxiliar",
      "name": "CdProduto",
      "data_type": "varchar",
      "max_length": 18,
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
    "CdAuxiliar": {
      "table": "ProdutosCodAuxiliar",
      "name": "CdAuxiliar",
      "data_type": "varchar",
      "max_length": 18,
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
    "DtUltAlteracao": {
      "table": "ProdutosCodAuxiliar",
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
