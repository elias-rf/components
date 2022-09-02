import { TEntity } from "@er/types/*";

export const EstoqueEscriturado: TEntity =
  {
  "database": "plano",
  "table": "EstoqueEscriturado",
  "fields": [
    {
      "field": "MesBase",
      "label": "MesBase",
      "name": "MesBase",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "AnoBase",
      "label": "AnoBase",
      "name": "AnoBase",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "CdProduto",
      "label": "CdProduto",
      "name": "CdProduto",
      "type": "string",
      "size": 15,
      "allowNull": false
    },
    {
      "field": "CdIndEstoque",
      "label": "CdIndEstoque",
      "name": "CdIndEstoque",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "TipoParticipante",
      "label": "TipoParticipante",
      "name": "TipoParticipante",
      "type": "string",
      "size": 32,
      "allowNull": false
    },
    {
      "field": "CdParticipante",
      "label": "CdParticipante",
      "name": "CdParticipante",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "Qtde",
      "label": "Qtde",
      "name": "Qtde",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "CdFilial",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "DtUltAlteracao",
      "label": "DtUltAlteracao",
      "name": "DtUltAlteracao",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    }
  ]
}
