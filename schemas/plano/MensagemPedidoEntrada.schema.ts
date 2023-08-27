import { Schema } from "../schemas.type";

export const MensagemPedidoEntrada: Schema =
  {
  "database": "plano",
  "table": "MensagemPedidoEntrada",
  "primary": [
    "CdFilial"
  ],
  "fields": {
    "CdFilial": {
      "table": "MensagemPedidoEntrada",
      "name": "CdFilial",
      "data_type": "money",
      "max_length": 8,
      "numeric_precision": 19,
      "numeric_scale": 4,
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
    "MensagemPedido": {
      "table": "MensagemPedidoEntrada",
      "name": "MensagemPedido",
      "data_type": "varchar",
      "max_length": 1028,
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
    "DtUltAtualizacao": {
      "table": "MensagemPedidoEntrada",
      "name": "DtUltAtualizacao",
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
