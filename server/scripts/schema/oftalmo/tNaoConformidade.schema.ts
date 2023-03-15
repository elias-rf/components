import { TTable } from "../../../../types/model";

export const tNaoConformidade: TTable = {
  database: "oftalmo",
  table: "tNaoConformidade",
  fields: [
    {
      field: "kNaoConformidade",
      label: "kNaoConformidade",
      name: "tNaoConformidade_id",
      typeField: "int",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NaoConformidade",
      label: "NaoConformidade",
      name: "NaoConformidade",
      typeField: "string",
      size: 30,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",
      size: 200,
    },
    {
      field: "Enable",
      label: "Enable",
      name: "Enable",
      typeField: "int",
      size: 1,
      allowNull: false,
      defaultValue: "1",
    },
  ],
};
