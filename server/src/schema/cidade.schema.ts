import { TEntity } from "@er/types/*";

export const cidade: TEntity = {
  database: "plano",
  table: "cidadesERF",
  fields: [
    {
      field: "CdCidadeIBGE",
      label: "Cód",
      name: "cidade_id",
      type: "int",
    },
    {
      field: "NmCidadeIBGE",
      label: "Máquina",
      name: "nome_cidade",
      primaryKey: true,
      type: "int",
    },
    {
      field: "CdUFIBGE",
      label: "Série",
      name: "uf_id",
      type: "int",
    },
    {
      field: "uf",
      label: "Cód Divisao",
      name: "uf",
      type: "int",
    },
    {
      field: "ufOld",
      label: "Cód Setor",
      name: "uf_old",
      primaryKey: true,
      type: "int",
    },
  ],
};
