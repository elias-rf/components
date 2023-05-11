import { TTableDef } from "@/types/model";

export const Solucoes: TTableDef = {
  database: "plano",
  table: "Solucoes",
  fields: [
    {
      field: "CdSolucao",
      label: "CdSolucao",
      name: "Solucoes_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NmSolucao",
      label: "NmSolucao",
      name: "NmSolucao",
      typeField: "string",

      allowNull: false,
    },
  ],
};
