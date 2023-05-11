import { TTableDef } from "@/types/model";

export const AgendaClientes: TTableDef = {
  database: "plano",
  table: "AgendaClientes",
  fields: [
    {
      field: "IdCompromisso",
      label: "IdCompromisso",
      name: "AgendaClientes_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NmCliente",
      label: "NmCliente",
      name: "NmCliente",
      typeField: "string",
    },
    {
      field: "Telefone",
      label: "Telefone",
      name: "Telefone",
      typeField: "string",
    },
  ],
};
