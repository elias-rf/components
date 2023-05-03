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
      allowNull: false,
    },
    {
      field: "NmCidadeIBGE",
      label: "NmCidadeIBGE",
      name: "NmCidadeIBGE",
      typeField: "string",
      size: 80,
      allowNull: false,
    },
  ],
};
