import { TTable } from "../../../../types";

export const CidadesIBGE: TTable = {
  database: "plano",
  table: "CidadesIBGE",
  fields: [
    {
      field: "CdUFIBGE",
      label: "CdUFIBGE",
      name: "CdUFIBGE",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "CdCidadeIBGE",
      label: "CdCidadeIBGE",
      name: "CdCidadeIBGE",
      type: "string",
      size: 5,
      allowNull: false,
    },
    {
      field: "NmCidadeIBGE",
      label: "NmCidadeIBGE",
      name: "NmCidadeIBGE",
      type: "string",
      size: 80,
      allowNull: false,
    },
  ],
};
