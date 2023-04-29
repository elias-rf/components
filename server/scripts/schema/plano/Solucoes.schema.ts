import { TTableDef } from "@mono/types/model";

export const Solucoes: TTableDef = {
  database: "plano",
  table: "Solucoes",
  fields: [
    {
      field: "CdSolucao",
      label: "CdSolucao",
      name: "Solucoes_id",
      typeField: "int",
      size: 2,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NmSolucao",
      label: "NmSolucao",
      name: "NmSolucao",
      typeField: "string",
      size: 40,
      allowNull: false,
    },
  ],
};
