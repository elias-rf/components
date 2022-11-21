import { TTable } from "../../../../types";

export const Intervencoes: TTable = {
  database: "plano",
  table: "Intervencoes",
  fields: [
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CdCliente",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "CdIntervencao",
      label: "CdIntervencao",
      name: "CdIntervencao",
      type: "string",
      size: 3,
    },
    {
      field: "data",
      label: "data",
      name: "data",
      type: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "PRM",
      label: "PRM",
      name: "PRM",
      type: "string",
      size: 20,
    },
    {
      field: "PrmTipo",
      label: "PrmTipo",
      name: "PrmTipo",
      type: "string",
      size: 1,
    },
    {
      field: "Manifestado",
      label: "Manifestado",
      name: "Manifestado",
      type: "string",
      size: 1,
    },
    {
      field: "Causa",
      label: "Causa",
      name: "Causa",
      type: "string",
      size: 60,
    },
    {
      field: "Comunicacao",
      label: "Comunicacao",
      name: "Comunicacao",
      type: "string",
      size: 60,
    },
    {
      field: "DiasComunicacao",
      label: "DiasComunicacao",
      name: "DiasComunicacao",
      type: "string",
      size: 4,
    },
    {
      field: "Resolucao",
      label: "Resolucao",
      name: "Resolucao",
      type: "string",
      size: 1024,
    },
    {
      field: "Resultado",
      label: "Resultado",
      name: "Resultado",
      type: "string",
      size: 15,
    },
    {
      field: "SituacaoResultado",
      label: "SituacaoResultado",
      name: "SituacaoResultado",
      type: "string",
      size: 35,
    },
    {
      field: "QtdeMedicamentos",
      label: "QtdeMedicamentos",
      name: "QtdeMedicamentos",
      type: "int",
      size: 4,
    },
    {
      field: "QtdeVisitas",
      label: "QtdeVisitas",
      name: "QtdeVisitas",
      type: "int",
      size: 4,
    },
    {
      field: "Ocorrencia",
      label: "Ocorrencia",
      name: "Ocorrencia",
      type: "string",
      size: 1024,
    },
    {
      field: "Farmaceutico",
      label: "Farmaceutico",
      name: "Farmaceutico",
      type: "string",
      size: 100,
    },
    {
      field: "Dt_resultado",
      label: "Dt_resultado",
      name: "Dt_resultado",
      type: "datetime",
      size: 8,
      scale: 3,
    },
  ],
};
