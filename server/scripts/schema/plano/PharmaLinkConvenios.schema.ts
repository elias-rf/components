import { TTable } from "../../../../types";

export const PharmaLinkConvenios: TTable = {
  database: "plano",
  table: "PharmaLinkConvenios",
  fields: [
    {
      field: "IdConvenio",
      label: "IdConvenio",
      name: "PharmaLinkConvenios_id",
      type: "string",
      size: 6,
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
