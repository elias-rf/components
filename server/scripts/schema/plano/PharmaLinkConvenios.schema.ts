import { TTableDef } from "@/types/model";

export const PharmaLinkConvenios: TTableDef = {
  database: "plano",
  table: "PharmaLinkConvenios",
  fields: [
    {
      field: "IdConvenio",
      label: "IdConvenio",
      name: "PharmaLinkConvenios_id",
      typeField: "string",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",

      allowNull: false,
    },
  ],
};
