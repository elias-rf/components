import { TTableDef } from "@/types/model";

export const IntervencoesRAT: TTableDef = {
  database: "plano",
  table: "IntervencoesRAT",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumeroRAT",
      label: "NumeroRAT",
      name: "NumeroRAT",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Sequencia",
      label: "Sequencia",
      name: "Sequencia",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "DtIntervencao",
      label: "DtIntervencao",
      name: "DtIntervencao",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "HrSaidaEmp",
      label: "HrSaidaEmp",
      name: "HrSaidaEmp",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "HrChegadaCli",
      label: "HrChegadaCli",
      name: "HrChegadaCli",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "HrInicio",
      label: "HrInicio",
      name: "HrInicio",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "HrTermino",
      label: "HrTermino",
      name: "HrTermino",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "HrSaidaCli",
      label: "HrSaidaCli",
      name: "HrSaidaCli",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "HrChegadaEmp",
      label: "HrChegadaEmp",
      name: "HrChegadaEmp",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "CdSituacao",
      label: "CdSituacao",
      name: "CdSituacao",
      typeField: "int",
    },
    {
      field: "KmRodado",
      label: "KmRodado",
      name: "KmRodado",
      typeField: "int",
    },
    {
      field: "CdTecnico",
      label: "CdTecnico",
      name: "CdTecnico",
      typeField: "int",
    },
    {
      field: "QtdeHoras",
      label: "QtdeHoras",
      name: "QtdeHoras",
      typeField: "float",

      scale: 4,
    },
    {
      field: "NumRatAssociado",
      label: "NumRatAssociado",
      name: "NumRatAssociado",
      typeField: "int",
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",
    },
    {
      field: "FgFaturado",
      label: "FgFaturado",
      name: "FgFaturado",
      typeField: "string",
    },
    {
      field: "FgDeslocFaturado",
      label: "FgDeslocFaturado",
      name: "FgDeslocFaturado",
      typeField: "string",
    },
    {
      field: "CdFase",
      label: "CdFase",
      name: "CdFase",
      typeField: "int",
    },
  ],
};
