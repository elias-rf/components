import { TTableDef } from "../../../../types/model";

export const IntervencoesRAT: TTableDef = {
  database: "plano",
  table: "IntervencoesRAT",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "NumeroRAT",
      label: "NumeroRAT",
      name: "NumeroRAT",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "Sequencia",
      label: "Sequencia",
      name: "Sequencia",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "DtIntervencao",
      label: "DtIntervencao",
      name: "DtIntervencao",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "HrSaidaEmp",
      label: "HrSaidaEmp",
      name: "HrSaidaEmp",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "HrChegadaCli",
      label: "HrChegadaCli",
      name: "HrChegadaCli",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "HrInicio",
      label: "HrInicio",
      name: "HrInicio",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "HrTermino",
      label: "HrTermino",
      name: "HrTermino",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "HrSaidaCli",
      label: "HrSaidaCli",
      name: "HrSaidaCli",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "HrChegadaEmp",
      label: "HrChegadaEmp",
      name: "HrChegadaEmp",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "CdSituacao",
      label: "CdSituacao",
      name: "CdSituacao",
      typeField: "int",
      size: 4,
    },
    {
      field: "KmRodado",
      label: "KmRodado",
      name: "KmRodado",
      typeField: "int",
      size: 4,
    },
    {
      field: "CdTecnico",
      label: "CdTecnico",
      name: "CdTecnico",
      typeField: "int",
      size: 4,
    },
    {
      field: "QtdeHoras",
      label: "QtdeHoras",
      name: "QtdeHoras",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "NumRatAssociado",
      label: "NumRatAssociado",
      name: "NumRatAssociado",
      typeField: "int",
      size: 4,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",
      size: 1024,
    },
    {
      field: "FgFaturado",
      label: "FgFaturado",
      name: "FgFaturado",
      typeField: "string",
      size: 1,
    },
    {
      field: "FgDeslocFaturado",
      label: "FgDeslocFaturado",
      name: "FgDeslocFaturado",
      typeField: "string",
      size: 1,
    },
    {
      field: "CdFase",
      label: "CdFase",
      name: "CdFase",
      typeField: "int",
      size: 2,
    },
  ],
};
