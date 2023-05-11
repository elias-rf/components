import { TTableDef } from "@/types/model";

export const VidaLinkServidores: TTableDef = {
  database: "plano",
  table: "VidaLinkServidores",
  fields: [
    {
      field: "IdMaquina",
      label: "IdMaquina",
      name: "VidaLinkServidores_id",
      typeField: "string",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NmServidor",
      label: "NmServidor",
      name: "NmServidor",
      typeField: "string",

      allowNull: false,
    },
  ],
};
