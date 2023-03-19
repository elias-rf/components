import { TTableDef } from "../../../../types/model";

export const tNovoNome: TTableDef = {
  database: "oftalmo",
  table: "tNovoNome",
  fields: [
    {
      field: "NomeProdutoItem",
      label: "NomeProdutoItem",
      name: "tNovoNome_id",
      typeField: "string",
      size: 30,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NovoNome",
      label: "NovoNome",
      name: "NovoNome",
      typeField: "string",
      size: 30,
    },
  ],
};
