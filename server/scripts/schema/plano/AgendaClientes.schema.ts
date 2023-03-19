import { TTableDef } from "../../../../types/model";

export const AgendaClientes: TTableDef = {
  database: "plano",
  table: "AgendaClientes",
  fields: [
    {
      field: "IdCompromisso",
      label: "IdCompromisso",
      name: "AgendaClientes_id",
      typeField: "int",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NmCliente",
      label: "NmCliente",
      name: "NmCliente",
      typeField: "string",
      size: 40,
    },
    {
      field: "Telefone",
      label: "Telefone",
      name: "Telefone",
      typeField: "string",
      size: 18,
    },
  ],
};
