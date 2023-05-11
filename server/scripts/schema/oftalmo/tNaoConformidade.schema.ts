import { TTableDef } from "@/types/model";

export const tNaoConformidade: TTableDef = {
  database: "oftalmo",
  table: "tNaoConformidade",
  fields: [
    {
      field: "kNaoConformidade",
      label: "kNaoConformidade",
      name: "tNaoConformidade_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NaoConformidade",
      label: "NaoConformidade",
      name: "NaoConformidade",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",
    },
    {
      field: "Enable",
      label: "Enable",
      name: "Enable",
      typeField: "int",

      allowNull: false,
      defaultValue: "1",
    },
  ],
};
