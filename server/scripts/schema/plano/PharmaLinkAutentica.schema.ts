import { TTableDef } from "@/types/model";

export const PharmaLinkAutentica: TTableDef = {
  database: "plano",
  table: "PharmaLinkAutentica",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "PharmaLinkAutentica_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Autentica",
      label: "Autentica",
      name: "Autentica",
      typeField: "string",

      allowNull: false,
    },
  ],
};
