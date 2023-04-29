import { TTableDef } from "@mono/types/model";

export const EventosDica: TTableDef = {
  database: "plano",
  table: "EventosDica",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
      typeField: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "CdUsuario",
      label: "CdUsuario",
      name: "CdUsuario",
      typeField: "string",
      size: 32,
      allowNull: false,
    },
    {
      field: "CdFuncao",
      label: "CdFuncao",
      name: "CdFuncao",
      typeField: "string",
      size: 32,
      allowNull: false,
    },
    {
      field: "Evento",
      label: "Evento",
      name: "Evento",
      typeField: "string",
      size: 128,
      allowNull: false,
    },
    {
      field: "Data",
      label: "Data",
      name: "Data",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
  ],
};
