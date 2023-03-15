import { TTable } from "../../../../types/model";

export const ProtocoloHist: TTable = {
  database: "plano",
  table: "ProtocoloHist",
  fields: [
    {
      field: "CdProtocoloHist",
      label: "CdProtocoloHist",
      name: "ProtocoloHist_id",
      typeField: "int",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "CdProtocolo",
      label: "CdProtocolo",
      name: "CdProtocolo",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "Historico",
      label: "Historico",
      name: "Historico",
      typeField: "string",
      size: 1000,
    },
  ],
};
