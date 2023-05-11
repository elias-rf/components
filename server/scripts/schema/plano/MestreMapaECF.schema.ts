import { TTableDef } from "@/types/model";

export const MestreMapaECF: TTableDef = {
  database: "plano",
  table: "MestreMapaECF",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "DtMapa",
      label: "DtMapa",
      name: "DtMapa",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "NumMapa",
      label: "NumMapa",
      name: "NumMapa",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
  ],
};
