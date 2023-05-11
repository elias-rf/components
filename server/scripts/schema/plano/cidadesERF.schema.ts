import { TTableDef } from "@/types/model";

export const cidadesERF: TTableDef = {
  database: "plano",
  table: "cidadesERF",
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
    },
    {
      field: "NmCidadeIBGE",
      label: "NmCidadeIBGE",
      name: "NmCidadeIBGE",
      typeField: "string",
    },
    {
      field: "uf",
      label: "uf",
      name: "uf",
      typeField: "string",
    },
    {
      field: "ufOld",
      label: "ufOld",
      name: "ufOld",
      typeField: "string",
    },
  ],
};
