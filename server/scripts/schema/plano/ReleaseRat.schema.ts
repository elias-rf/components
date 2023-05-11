import { TTableDef } from "@/types/model";

export const ReleaseRat: TTableDef = {
  database: "plano",
  table: "ReleaseRat",
  fields: [
    {
      field: "CdReleaseRAT",
      label: "CdReleaseRAT",
      name: "ReleaseRat_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NumeroRat",
      label: "NumeroRat",
      name: "NumeroRat",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "ReleaseFuncionalidade",
      label: "ReleaseFuncionalidade",
      name: "ReleaseFuncionalidade",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "ReleaseDescricao",
      label: "ReleaseDescricao",
      name: "ReleaseDescricao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "ReleaseObservacao",
      label: "ReleaseObservacao",
      name: "ReleaseObservacao",
      typeField: "string",

      allowNull: false,
    },
  ],
};
