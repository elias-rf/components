import { TTableDef } from "@mono/types/model";

export const cidadesERF: TTableDef = {
  database: "plano",
  table: "cidadesERF",
  fields: [
    {
      field: "CdUFIBGE",
      label: "CdUFIBGE",
      name: "CdUFIBGE",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "CdCidadeIBGE",
      label: "CdCidadeIBGE",
      name: "CdCidadeIBGE",
      typeField: "string",
      size: 5,
    },
    {
      field: "NmCidadeIBGE",
      label: "NmCidadeIBGE",
      name: "NmCidadeIBGE",
      typeField: "string",
      size: 80,
    },
    {
      field: "uf",
      label: "uf",
      name: "uf",
      typeField: "string",
      size: 3,
    },
    {
      field: "ufOld",
      label: "ufOld",
      name: "ufOld",
      typeField: "string",
      size: 2,
    },
  ],
};
