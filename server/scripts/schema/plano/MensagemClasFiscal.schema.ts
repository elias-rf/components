import { TEntity } from "../../../../types";

export const MensagemClasFiscal: TEntity = {
  database: "plano",
  table: "MensagemClasFiscal",
  schema: [
    {
      field: "ClasFiscal",
      label: "ClasFiscal",
      name: "MensagemClasFiscal_id",
      type: "string",
      size: 64,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Mensagem",
      label: "Mensagem",
      name: "Mensagem",
      type: "string",
      size: 128,
      allowNull: false,
    },
  ],
};