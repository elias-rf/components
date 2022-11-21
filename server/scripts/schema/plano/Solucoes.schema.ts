import { TTable } from "../../../../types";

export const Solucoes: TTable = {
  database: "plano",
  table: "Solucoes",
  fields: [
    {
      field: "CdSolucao",
      label: "CdSolucao",
      name: "Solucoes_id",
      type: "int",
      size: 2,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NmSolucao",
      label: "NmSolucao",
      name: "NmSolucao",
      type: "string",
      size: 40,
      allowNull: false,
    },
  ],
};
