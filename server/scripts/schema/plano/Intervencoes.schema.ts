import { TTableDef } from "@/types/model";

export const Intervencoes: TTableDef = {
  database: "plano",
  table: "Intervencoes",
  fields: [
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CdCliente",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "CdIntervencao",
      label: "CdIntervencao",
      name: "CdIntervencao",
      typeField: "string",
    },
    {
      field: "data",
      label: "data",
      name: "data",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "PRM",
      label: "PRM",
      name: "PRM",
      typeField: "string",
    },
    {
      field: "PrmTipo",
      label: "PrmTipo",
      name: "PrmTipo",
      typeField: "string",
    },
    {
      field: "Manifestado",
      label: "Manifestado",
      name: "Manifestado",
      typeField: "string",
    },
    {
      field: "Causa",
      label: "Causa",
      name: "Causa",
      typeField: "string",
    },
    {
      field: "Comunicacao",
      label: "Comunicacao",
      name: "Comunicacao",
      typeField: "string",
    },
    {
      field: "DiasComunicacao",
      label: "DiasComunicacao",
      name: "DiasComunicacao",
      typeField: "string",
    },
    {
      field: "Resolucao",
      label: "Resolucao",
      name: "Resolucao",
      typeField: "string",
    },
    {
      field: "Resultado",
      label: "Resultado",
      name: "Resultado",
      typeField: "string",
    },
    {
      field: "SituacaoResultado",
      label: "SituacaoResultado",
      name: "SituacaoResultado",
      typeField: "string",
    },
    {
      field: "QtdeMedicamentos",
      label: "QtdeMedicamentos",
      name: "QtdeMedicamentos",
      typeField: "int",
    },
    {
      field: "QtdeVisitas",
      label: "QtdeVisitas",
      name: "QtdeVisitas",
      typeField: "int",
    },
    {
      field: "Ocorrencia",
      label: "Ocorrencia",
      name: "Ocorrencia",
      typeField: "string",
    },
    {
      field: "Farmaceutico",
      label: "Farmaceutico",
      name: "Farmaceutico",
      typeField: "string",
    },
    {
      field: "Dt_resultado",
      label: "Dt_resultado",
      name: "Dt_resultado",
      typeField: "datetime",

      scale: 3,
    },
  ],
};
