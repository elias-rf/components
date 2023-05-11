import { TTableDef } from "@/types/model";

export const ContratoItemHistorico: TTableDef = {
  database: "plano",
  table: "ContratoItemHistorico",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CdCliente",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "DiaContrato",
      label: "DiaContrato",
      name: "DiaContrato",
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
      field: "DtEvento",
      label: "DtEvento",
      name: "DtEvento",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "Evento",
      label: "Evento",
      name: "Evento",
      typeField: "string",

      allowNull: false,
    },
  ],
};
