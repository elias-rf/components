import { TEntity } from "@er/types/*";

export const IntervencoesRAT: TEntity =
  {
  "database": "plano",
  "table": "IntervencoesRAT",
  "fields": [
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "CdFilial",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "NumeroRAT",
      "label": "NumeroRAT",
      "name": "NumeroRAT",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "Sequencia",
      "label": "Sequencia",
      "name": "Sequencia",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "DtIntervencao",
      "label": "DtIntervencao",
      "name": "DtIntervencao",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "HrSaidaEmp",
      "label": "HrSaidaEmp",
      "name": "HrSaidaEmp",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "HrChegadaCli",
      "label": "HrChegadaCli",
      "name": "HrChegadaCli",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "HrInicio",
      "label": "HrInicio",
      "name": "HrInicio",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "HrTermino",
      "label": "HrTermino",
      "name": "HrTermino",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "HrSaidaCli",
      "label": "HrSaidaCli",
      "name": "HrSaidaCli",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "HrChegadaEmp",
      "label": "HrChegadaEmp",
      "name": "HrChegadaEmp",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "CdSituacao",
      "label": "CdSituacao",
      "name": "CdSituacao",
      "type": "int",
      "size": 4
    },
    {
      "field": "KmRodado",
      "label": "KmRodado",
      "name": "KmRodado",
      "type": "int",
      "size": 4
    },
    {
      "field": "CdTecnico",
      "label": "CdTecnico",
      "name": "CdTecnico",
      "type": "int",
      "size": 4
    },
    {
      "field": "QtdeHoras",
      "label": "QtdeHoras",
      "name": "QtdeHoras",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "NumRatAssociado",
      "label": "NumRatAssociado",
      "name": "NumRatAssociado",
      "type": "int",
      "size": 4
    },
    {
      "field": "Descricao",
      "label": "Descricao",
      "name": "Descricao",
      "type": "string",
      "size": 1024
    },
    {
      "field": "FgFaturado",
      "label": "FgFaturado",
      "name": "FgFaturado",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgDeslocFaturado",
      "label": "FgDeslocFaturado",
      "name": "FgDeslocFaturado",
      "type": "string",
      "size": 1
    },
    {
      "field": "CdFase",
      "label": "CdFase",
      "name": "CdFase",
      "type": "int",
      "size": 2
    }
  ]
}
