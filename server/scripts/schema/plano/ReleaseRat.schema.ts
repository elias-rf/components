import { TTableDef } from "@mono/types/model";

export const ReleaseRat: TTableDef = {
  database: "plano",
  table: "ReleaseRat",
  fields: [
    {
      field: "CdReleaseRAT",
      label: "CdReleaseRAT",
      name: "ReleaseRat_id",
      typeField: "int",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NumeroRat",
      label: "NumeroRat",
      name: "NumeroRat",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "ReleaseFuncionalidade",
      label: "ReleaseFuncionalidade",
      name: "ReleaseFuncionalidade",
      typeField: "string",
      size: 4000,
      allowNull: false,
    },
    {
      field: "ReleaseDescricao",
      label: "ReleaseDescricao",
      name: "ReleaseDescricao",
      typeField: "string",
      size: 8000,
      allowNull: false,
    },
    {
      field: "ReleaseObservacao",
      label: "ReleaseObservacao",
      name: "ReleaseObservacao",
      typeField: "string",
      size: 8000,
      allowNull: false,
    },
  ],
};
