import { TTable } from "../../../../types/model";

export const PharmaLinkConvenios: TTable = {
  database: "plano",
  table: "PharmaLinkConvenios",
  fields: [
    {
      field: "IdConvenio",
      label: "IdConvenio",
      name: "PharmaLinkConvenios_id",
      typeField: "string",
      size: 6,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",
      size: 40,
      allowNull: false,
    },
  ],
};
