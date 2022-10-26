import { TEntity } from "../../../../types";

export const Eventos: TEntity = {
  database: "plano",
  table: "Eventos",
  schema: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
      type: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      type: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "Data",
      label: "Data",
      name: "Data",
      type: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "Horario",
      label: "Horario",
      name: "Horario",
      type: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "CdUsuario",
      label: "CdUsuario",
      name: "CdUsuario",
      type: "string",
      size: 16,
      allowNull: false,
    },
    {
      field: "CdFuncao",
      label: "CdFuncao",
      name: "CdFuncao",
      type: "string",
      size: 32,
    },
    {
      field: "Evento",
      label: "Evento",
      name: "Evento",
      type: "string",
      size: 1024,
    },
    {
      field: "Estacao",
      label: "Estacao",
      name: "Estacao",
      type: "string",
      size: 64,
    },
  ],
};