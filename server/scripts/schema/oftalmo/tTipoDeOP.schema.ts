import { TTableDef } from "@/types/model";

export const tTipoDeOP: TTableDef = {
  database: "oftalmo",
  table: "tTipoDeOP",
  fields: [
    {
      field: "kTipoOP",
      label: "kTipoOP",
      name: "tTipoDeOP_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "DescTipo",
      label: "DescTipo",
      name: "DescTipo",
      typeField: "string",

      allowNull: false,
    },
  ],
};
