import { TTableDef } from "@/types/model";

export const VidaLinkConvenios: TTableDef = {
  database: "plano",
  table: "VidaLinkConvenios",
  fields: [
    {
      field: "IdConvenio",
      label: "IdConvenio",
      name: "VidaLinkConvenios_id",
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
