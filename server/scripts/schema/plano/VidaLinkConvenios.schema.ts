import { TTable } from "../../../../types";

export const VidaLinkConvenios: TTable = {
  database: "plano",
  table: "VidaLinkConvenios",
  fields: [
    {
      field: "IdConvenio",
      label: "IdConvenio",
      name: "VidaLinkConvenios_id",
      type: "string",
      size: 10,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      type: "string",
      size: 40,
      allowNull: false,
    },
  ],
};
