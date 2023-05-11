import { TTableDef } from "@/types/model";

export const Projetos: TTableDef = {
  database: "plano",
  table: "Projetos",
  fields: [
    {
      field: "CdProjeto",
      label: "CdProjeto",
      name: "Projetos_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NmProjeto",
      label: "NmProjeto",
      name: "NmProjeto",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgAtivo",
      label: "FgAtivo",
      name: "FgAtivo",
      typeField: "string",
    },
  ],
};
