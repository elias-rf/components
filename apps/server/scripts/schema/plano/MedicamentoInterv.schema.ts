import { TEntity } from "@er/types/*";

export const MedicamentoInterv: TEntity =
  {
  "database": "plano",
  "table": "MedicamentoInterv",
  "fields": [
    {
      "field": "CdIntervencao",
      "label": "CdIntervencao",
      "name": "CdIntervencao",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "CdCliente",
      "label": "CdCliente",
      "name": "CdCliente",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "CdProduto",
      "label": "CdProduto",
      "name": "CdProduto",
      "type": "string",
      "size": 15
    },
    {
      "field": "DtInicio",
      "label": "DtInicio",
      "name": "DtInicio",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "DtFim",
      "label": "DtFim",
      "name": "DtFim",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "DtUltAlteracao",
      "label": "DtUltAlteracao",
      "name": "DtUltAlteracao",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "Posologia",
      "label": "Posologia",
      "name": "Posologia",
      "type": "string",
      "size": 15
    }
  ]
}
