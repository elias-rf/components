import { TEntity } from "@er/types/*";

export const SolicitacaoRat: TEntity =
  {
  "database": "plano",
  "table": "SolicitacaoRat",
  "fields": [
    {
      "field": "CdSolicitacaoRat",
      "label": "CdSolicitacaoRat",
      "name": "SolicitacaoRat_id",
      "type": "int",
      "size": 4,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "NumeroRAT",
      "label": "NumeroRAT",
      "name": "NumeroRAT",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "Mudanca",
      "label": "Mudanca",
      "name": "Mudanca",
      "type": "string",
      "size": 250,
      "allowNull": false
    },
    {
      "field": "ResumoMudanca",
      "label": "ResumoMudanca",
      "name": "ResumoMudanca",
      "type": "string",
      "size": 4000,
      "allowNull": false
    },
    {
      "field": "RazoesMudanca",
      "label": "RazoesMudanca",
      "name": "RazoesMudanca",
      "type": "string",
      "size": 4000,
      "allowNull": false
    },
    {
      "field": "PreRequisitos",
      "label": "PreRequisitos",
      "name": "PreRequisitos",
      "type": "string",
      "size": 4000,
      "allowNull": false
    },
    {
      "field": "PontosChecagem",
      "label": "PontosChecagem",
      "name": "PontosChecagem",
      "type": "string",
      "size": 4000,
      "allowNull": false
    },
    {
      "field": "CdTecnicoDesenv",
      "label": "CdTecnicoDesenv",
      "name": "CdTecnicoDesenv",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "CdTecnicoSolicitacao",
      "label": "CdTecnicoSolicitacao",
      "name": "CdTecnicoSolicitacao",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "FgAguardaAprovConteudo",
      "label": "FgAguardaAprovConteudo",
      "name": "FgAguardaAprovConteudo",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "FgAguardaAprovOrcamento",
      "label": "FgAguardaAprovOrcamento",
      "name": "FgAguardaAprovOrcamento",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "FgAprovado",
      "label": "FgAprovado",
      "name": "FgAprovado",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "DataEntregaSol",
      "label": "DataEntregaSol",
      "name": "DataEntregaSol",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "HorasPrevistas",
      "label": "HorasPrevistas",
      "name": "HorasPrevistas",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "HorasRepassadas",
      "label": "HorasRepassadas",
      "name": "HorasRepassadas",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "DetalheMudanca",
      "label": "DetalheMudanca",
      "name": "DetalheMudanca",
      "type": "string",
      "size": 8000,
      "allowNull": false
    },
    {
      "field": "ObservacaoMudanca",
      "label": "ObservacaoMudanca",
      "name": "ObservacaoMudanca",
      "type": "string",
      "size": 8000,
      "allowNull": false
    }
  ]
}
