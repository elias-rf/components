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
      size: 9,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "MSG",
      label: "MSG",
      name: "MSG",
      typeField: "string",
      size: 2048,
      allowNull: false,
    },
  ],
};
