import { TTable } from "../../../../types";

export const tTipoDeOP: TTable = {
  database: "oftalmo",
  table: "tTipoDeOP",
  fields: [
    {
      field: "kTipoOP",
      label: "kTipoOP",
      name: "tTipoDeOP_id",
      type: "int",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "DescTipo",
      label: "DescTipo",
      name: "DescTipo",
      type: "string",
      size: 50,
      allowNull: false,
    },
  ],
};
