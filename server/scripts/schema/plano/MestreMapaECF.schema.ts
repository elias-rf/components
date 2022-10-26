import { TEntity } from "../../../../types";

export const MestreMapaECF: TEntity = {
  database: "plano",
  table: "MestreMapaECF",
  schema: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "DtMapa",
      label: "DtMapa",
      name: "DtMapa",
      type: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "NumMapa",
      label: "NumMapa",
      name: "NumMapa",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
  ],
};