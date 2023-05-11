import { TTableDef } from "@/types/model";

export const CidadesIBGE: TTableDef = {
  database: "plano",
  table: "CidadesIBGE",
  fields: [
    {
      field: "CdUFIBGE",
      label: "CdUFIBGE",
      name: "CdUFIBGE",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "CdCidadeIBGE",
      label: "CdCidadeIBGE",
      name: "CdCidadeIBGE",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "NmCidadeIBGE",
      label: "NmCidadeIBGE",
      name: "NmCidadeIBGE",
      typeField: "string",

      allowNull: false,
    },
  ],
};
