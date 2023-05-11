import { TTableDef } from "@/types/model";

export const MensagemPadraoEmailCR: TTableDef = {
  database: "plano",
  table: "MensagemPadraoEmailCR",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "MensagemPadraoEmailCR_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "MSG",
      label: "MSG",
      name: "MSG",
      typeField: "string",

      allowNull: false,
    },
  ],
};
