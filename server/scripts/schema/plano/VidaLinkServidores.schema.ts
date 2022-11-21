import { TTable } from "../../../../types";

export const VidaLinkServidores: TTable = {
  database: "plano",
  table: "VidaLinkServidores",
  fields: [
    {
      field: "IdMaquina",
      label: "IdMaquina",
      name: "VidaLinkServidores_id",
      type: "string",
      size: 32,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NmServidor",
      label: "NmServidor",
      name: "NmServidor",
      type: "string",
      size: 40,
      allowNull: false,
    },
  ],
};
