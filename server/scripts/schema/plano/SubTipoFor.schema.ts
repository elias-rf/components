import { TTableDef } from "@/types/model";

export const SubTipoFor: TTableDef = {
  database: "plano",
  table: "SubTipoFor",
  fields: [
    {
      field: "CdSubTipo",
      label: "CdSubTipo",
      name: "SubTipoFor_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NmSubTipo",
      label: "NmSubTipo",
      name: "NmSubTipo",
      typeField: "string",
    },
  ],
};
