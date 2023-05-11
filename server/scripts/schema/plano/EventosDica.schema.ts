import { TTableDef } from "@/types/model";

export const EventosDica: TTableDef = {
  database: "plano",
  table: "EventosDica",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdUsuario",
      label: "CdUsuario",
      name: "CdUsuario",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CdFuncao",
      label: "CdFuncao",
      name: "CdFuncao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Evento",
      label: "Evento",
      name: "Evento",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Data",
      label: "Data",
      name: "Data",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
  ],
};
