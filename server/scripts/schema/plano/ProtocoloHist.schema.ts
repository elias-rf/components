import { TEntity } from "../../../../types";

export const ProtocoloHist: TEntity = {
  database: "plano",
  table: "ProtocoloHist",
  schema: [
    {
      field: "CdProtocoloHist",
      label: "CdProtocoloHist",
      name: "ProtocoloHist_id",
      type: "int",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "CdProtocolo",
      label: "CdProtocolo",
      name: "CdProtocolo",
      type: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "Historico",
      label: "Historico",
      name: "Historico",
      type: "string",
      size: 1000,
    },
  ],
};
