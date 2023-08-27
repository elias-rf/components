import { Schema } from "../schemas.type";

export const ProdutoTributacaoMensagemDesoneracao: Schema =
  {
  "database": "plano",
  "table": "ProdutoTributacaoMensagemDesoneracao",
  "primary": [
    "CdBeneficioFiscal"
  ],
  "fields": {
    "CdBeneficioFiscal": {
      "table": "ProdutoTributacaoMensagemDesoneracao",
      "name": "CdBeneficioFiscal",
      "data_type": "varchar",
      "max_length": 10,
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
    "CdMotivoDesoneracao": {
      "table": "ProdutoTributacaoMensagemDesoneracao",
      "name": "CdMotivoDesoneracao",
      "data_type": "numeric",
      "max_length": 5,
      "numeric_precision": 2,
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
