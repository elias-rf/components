import { TTable } from "../../../../types/model";

export const Intervencoes: TTable = {
  database: "plano",
  table: "Intervencoes",
  fields: [
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CdCliente",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "CdIntervencao",
      label: "CdIntervencao",
      name: "CdIntervencao",
      typeField: "string",
      size: 3,
    },
    {
      field: "data",
      label: "data",
      name: "data",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "PRM",
      label: "PRM",
      name: "PRM",
      typeField: "string",
      size: 20,
    },
    {
      field: "PrmTipo",
      label: "PrmTipo",
      name: "PrmTipo",
      typeField: "string",
      size: 1,
    },
    {
      field: "Manifestado",
      label: "Manifestado",
      name: "Manifestado",
      typeField: "string",
      size: 1,
    },
    {
      field: "Causa",
      label: "Causa",
      name: "Causa",
      typeField: "string",
      size: 60,
    },
    {
      field: "Comunicacao",
      label: "Comunicacao",
      name: "Comunicacao",
      typeField: "string",
      size: 60,
    },
    {
      field: "DiasComunicacao",
      label: "DiasComunicacao",
      name: "DiasComunicacao",
      typeField: "string",
      size: 4,
    },
    {
      field: "Resolucao",
      label: "Resolucao",
      name: "Resolucao",
      typeField: "string",
      size: 1024,
    },
    {
      field: "Resultado",
      label: "Resultado",
      name: "Resultado",
      typeField: "string",
      size: 15,
    },
    {
      field: "SituacaoResultado",
      label: "SituacaoResultado",
      name: "SituacaoResultado",
      typeField: "string",
      size: 35,
    },
    {
      field: "QtdeMedicamentos",
      label: "QtdeMedicamentos",
      name: "QtdeMedicamentos",
      typeField: "int",
      size: 4,
    },
    {
      field: "QtdeVisitas",
      label: "QtdeVisitas",
      name: "QtdeVisitas",
      typeField: "int",
      size: 4,
    },
    {
      field: "Ocorrencia",
      label: "Ocorrencia",
      name: "Ocorrencia",
      typeField: "string",
      size: 1024,
    },
    {
      field: "Farmaceutico",
      label: "Farmaceutico",
      name: "Farmaceutico",
      typeField: "string",
      size: 100,
    },
    {
      field: "Dt_resultado",
      label: "Dt_resultado",
      name: "Dt_resultado",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
  ],
};
