import { Schema } from "../schemas.type";

export const ProdutoProducaoEtiquetaExterna: Schema =
  {
  "database": "plano",
  "table": "ProdutoProducaoEtiquetaExterna",
  "primary": [
    "CdProduto"
  ],
  "fields": {
    "CdProduto": {
      "table": "ProdutoProducaoEtiquetaExterna",
      "name": "CdProduto",
      "data_type": "varchar",
      "max_length": 16,
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
    "Etiqueta": {
      "table": "ProdutoProducaoEtiquetaExterna",
      "name": "Etiqueta",
      "data_type": "varchar",
      "max_length": -1,
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
    }
  }
}
