import { TTableDef } from "../../../../types/model";

export const TipCli: TTableDef = {
  database: "plano",
  table: "TipCli",
  fields: [
    {
      field: "CdTipo",
      label: "CdTipo",
      name: "TipCli_id",
      typeField: "int",
      size: 2,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NmTipo",
      label: "NmTipo",
      name: "NmTipo",
      typeField: "string",
      size: 30,
    },
    {
      field: "NumVias",
      label: "NumVias",
      name: "NumVias",
      typeField: "int",
      size: 2,
    },
    {
      field: "dsObservacao",
      label: "dsObservacao",
      name: "dsObservacao",
      typeField: "string",
      size: 300,
    },
  ],
};
