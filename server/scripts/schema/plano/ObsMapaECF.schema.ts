import { TTableDef } from "@/types/model";

export const ObsMapaECF: TTableDef = {
  database: "plano",
  table: "ObsMapaECF",
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
      field: "Observacao",
      label: "Observacao",
      name: "Observacao",
      typeField: "string",
    },
  ],
};
