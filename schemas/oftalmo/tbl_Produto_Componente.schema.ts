import { Schema } from "../schemas.type";

export const tbl_Produto_Componente: Schema =
  {
  "database": "oftalmo",
  "table": "tbl_Produto_Componente",
  "primary": [],
  "fields": {
    "fkProduto": {
      "table": "tbl_Produto_Componente",
      "name": "fkProduto",
      "data_type": "tCodigoEmpresa",
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
    "fkProdutoComponente": {
      "table": "tbl_Produto_Componente",
      "name": "fkProdutoComponente",
      "data_type": "tCodigoEmpresa",
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
    "Qtd": {
      "table": "tbl_Produto_Componente",
      "name": "Qtd",
      "data_type": "float",
      "max_length": 8,
      "numeric_precision": 53,
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
