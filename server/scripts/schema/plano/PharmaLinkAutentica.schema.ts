import { TTable } from "../../../../types";

export const PharmaLinkAutentica: TTable = {
  database: "plano",
  table: "PharmaLinkAutentica",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "PharmaLinkAutentica_id",
      type: "int",
      size: 9,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Autentica",
      label: "Autentica",
      name: "Autentica",
      type: "string",
      size: 16,
      allowNull: false,
    },
  ],
};
