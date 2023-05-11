import { TTableDef } from "@/types/model";

export const MensagemClasFiscal: TTableDef = {
  database: "plano",
  table: "MensagemClasFiscal",
  fields: [
    {
      field: "ClasFiscal",
      label: "ClasFiscal",
      name: "MensagemClasFiscal_id",
      typeField: "string",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Mensagem",
      label: "Mensagem",
      name: "Mensagem",
      typeField: "string",

      allowNull: false,
    },
  ],
};
