import { TTableDef } from "@/types/model";

export const ProtocoloHist: TTableDef = {
  database: "plano",
  table: "ProtocoloHist",
  fields: [
    {
      field: "CdProtocoloHist",
      label: "CdProtocoloHist",
      name: "ProtocoloHist_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "CdProtocolo",
      label: "CdProtocolo",
      name: "CdProtocolo",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Historico",
      label: "Historico",
      name: "Historico",
      typeField: "string",
    },
  ],
};
