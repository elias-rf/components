import { TTable } from "../../../../types/model";

export const ePharmaMensagens: TTable = {
  database: "plano",
  table: "ePharmaMensagens",
  fields: [
    {
      field: "CdMensagem",
      label: "CdMensagem",
      name: "ePharmaMensagens_id",
      typeField: "string",
      size: 2,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "DescricaoMensagem",
      label: "DescricaoMensagem",
      name: "DescricaoMensagem",
      typeField: "string",
      size: 64,
      allowNull: false,
    },
  ],
};
