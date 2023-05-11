import { TTableDef } from "@/types/model";

export const TipCli: TTableDef = {
  database: "plano",
  table: "TipCli",
  fields: [
    {
      field: "CdTipo",
      label: "CdTipo",
      name: "TipCli_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NmTipo",
      label: "NmTipo",
      name: "NmTipo",
      typeField: "string",
    },
    {
      field: "NumVias",
      label: "NumVias",
      name: "NumVias",
      typeField: "int",
    },
    {
      field: "dsObservacao",
      label: "dsObservacao",
      name: "dsObservacao",
      typeField: "string",
    },
  ],
};
