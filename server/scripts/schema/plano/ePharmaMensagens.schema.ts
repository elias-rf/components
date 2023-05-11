import { TTableDef } from "@/types/model";

export const ePharmaMensagens: TTableDef = {
  database: "plano",
  table: "ePharmaMensagens",
  fields: [
    {
      field: "CdMensagem",
      label: "CdMensagem",
      name: "ePharmaMensagens_id",
      typeField: "string",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "DescricaoMensagem",
      label: "DescricaoMensagem",
      name: "DescricaoMensagem",
      typeField: "string",

      allowNull: false,
    },
  ],
};
