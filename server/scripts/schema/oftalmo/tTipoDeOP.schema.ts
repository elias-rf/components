import { TTableDef } from "@mono/types/model";

export const tTipoDeOP: TTableDef = {
  database: "oftalmo",
  table: "tTipoDeOP",
  fields: [
    {
      field: "kTipoOP",
      label: "kTipoOP",
      name: "tTipoDeOP_id",
      typeField: "int",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "DescTipo",
      label: "DescTipo",
      name: "DescTipo",
      typeField: "string",
      size: 50,
      allowNull: false,
    },
  ],
};
