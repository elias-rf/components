import { TTable } from "../../../../types";

export const ReleaseRat: TTable = {
  database: "plano",
  table: "ReleaseRat",
  fields: [
    {
      field: "CdReleaseRAT",
      label: "CdReleaseRAT",
      name: "ReleaseRat_id",
      type: "int",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NumeroRat",
      label: "NumeroRat",
      name: "NumeroRat",
      type: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "ReleaseFuncionalidade",
      label: "ReleaseFuncionalidade",
      name: "ReleaseFuncionalidade",
      type: "string",
      size: 4000,
      allowNull: false,
    },
    {
      field: "ReleaseDescricao",
      label: "ReleaseDescricao",
      name: "ReleaseDescricao",
      type: "string",
      size: 8000,
      allowNull: false,
    },
    {
      field: "ReleaseObservacao",
      label: "ReleaseObservacao",
      name: "ReleaseObservacao",
      type: "string",
      size: 8000,
      allowNull: false,
    },
  ],
};
