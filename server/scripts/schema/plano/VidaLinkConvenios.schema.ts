import { TTable } from "../../../../types/model";

export const VidaLinkConvenios: TTable = {
  database: "plano",
  table: "VidaLinkConvenios",
  fields: [
    {
      field: "IdConvenio",
      label: "IdConvenio",
      name: "VidaLinkConvenios_id",
      typeField: "string",
      size: 10,
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
