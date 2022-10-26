import { TEntity } from "../../../../types";

export const tNaoConformidade: TEntity = {
  database: "oftalmo",
  table: "tNaoConformidade",
  schema: [
    {
      field: "kNaoConformidade",
      label: "kNaoConformidade",
      name: "tNaoConformidade_id",
      type: "int",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NaoConformidade",
      label: "NaoConformidade",
      name: "NaoConformidade",
      type: "string",
      size: 30,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      type: "string",
      size: 200,
    },
    {
      field: "Enable",
      label: "Enable",
      name: "Enable",
      type: "int",
      size: 1,
      allowNull: false,
      defaultValue: "1",
    },
  ],
};
