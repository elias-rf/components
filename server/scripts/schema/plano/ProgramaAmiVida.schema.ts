import { TEntity } from "@er/types/*";

export const ProgramaAmiVida: TEntity =
  {
  "database": "plano",
  "table": "ProgramaAmiVida",
  "fields": [
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "CdFilial",
      "type": "float",
      "size": 8,
      "scale": 4,
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
      "field": "Campanha",
      "label": "Campanha",
      "name": "Campanha",
      "type": "string",
      "size": 64,
      "allowNull": false
    },
    {
      "field": "UnidadesCaixa",
      "label": "UnidadesCaixa",
      "name": "UnidadesCaixa",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "DtInicioCampanha",
      "label": "DtInicioCampanha",
      "name": "DtInicioCampanha",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "DtFinalCampanha",
      "label": "DtFinalCampanha",
      "name": "DtFinalCampanha",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "FgParticipacao",
      "label": "FgParticipacao",
      "name": "FgParticipacao",
      "type": "string",
      "size": 1,
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
