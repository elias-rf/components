import { TEntity } from "../../../../types";

export const Projetos: TEntity = {
  database: "plano",
  table: "Projetos",
  schema: [
    {
      field: "CdProjeto",
      label: "CdProjeto",
      name: "Projetos_id",
      type: "int",
      size: 2,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NmProjeto",
      label: "NmProjeto",
      name: "NmProjeto",
      type: "string",
      size: 40,
      allowNull: false,
    },
    {
      field: "FgAtivo",
      label: "FgAtivo",
      name: "FgAtivo",
      type: "string",
      size: 1,
    },
  ],
};
