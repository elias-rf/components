import { TTable } from "../types";

export const cidade: TTable = {
  database: "plano",
  table: "cidadesERF",
  fields: [
    {
      field: "NmCidadeIBGE",
      label: "Máquina",
      name: "nome_cidade",
      primaryKey: true,
      type: "string",
    },
    {
      field: "ufOld",
      label: "Cód Setor",
      name: "uf_old",
      primaryKey: true,
      type: "string",
    },
    {
      field: "CdCidadeIBGE",
      label: "Cód",
      name: "cidade_id",
      type: "string",
    },

    {
      field: "CdUFIBGE",
      label: "Série",
      name: "uf_id",
      type: "int",
      allowNull: false,
    },
    {
      field: "uf",
      label: "Cód Divisao",
      name: "uf",
      type: "string",
    },
  ],
};
