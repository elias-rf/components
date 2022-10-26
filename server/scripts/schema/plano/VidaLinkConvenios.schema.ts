import { TEntity } from "../../../../types";

export const VidaLinkConvenios: TEntity = {
  database: "plano",
  table: "VidaLinkConvenios",
  schema: [
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
