import { TEntity } from "../../../../types";

export const MensagemPadraoEmailCR: TEntity = {
  database: "plano",
  table: "MensagemPadraoEmailCR",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "MensagemPadraoEmailCR_id",
      type: "int",
      size: 9,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "MSG",
      label: "MSG",
      name: "MSG",
      type: "string",
      size: 2048,
      allowNull: false,
    },
  ],
};
