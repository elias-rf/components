import { TEntity } from "../../../../types";

export const EventosDica: TEntity = {
  database: "plano",
  table: "EventosDica",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
      type: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "CdUsuario",
      label: "CdUsuario",
      name: "CdUsuario",
      type: "string",
      size: 32,
      allowNull: false,
    },
    {
      field: "CdFuncao",
      label: "CdFuncao",
      name: "CdFuncao",
      type: "string",
      size: 32,
      allowNull: false,
    },
    {
      field: "Evento",
      label: "Evento",
      name: "Evento",
      type: "string",
      size: 128,
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
  ],
};
