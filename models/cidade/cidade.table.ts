import { TTableDef } from "../../types/model";

export const cidade: TTableDef = {
  database: "plano",
  table: "cidadesERF",
  fields: [
    {
      field: "NmCidadeIBGE",
      label: "Máquina",
      name: "nome_cidade",
      primaryKey: true,
      typeField: "string",
    },
    {
      field: "ufOld",
      label: "Cód Setor",
      name: "uf_old",
      primaryKey: true,
      typeField: "string",
    },
    {
      field: "CdCidadeIBGE",
      label: "Cód",
      name: "cidade_id",
      typeField: "string",
    },

    {
      field: "CdUFIBGE",
      label: "Série",
      name: "uf_id",
      typeField: "int",
      allowNull: false,
    },
    {
      field: "uf",
      label: "Cód Divisao",
      name: "uf",
      typeField: "string",
    },
  ],
};
