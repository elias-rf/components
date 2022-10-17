import { TEntity } from "../../../../types";

export const Situacoes: TEntity = {
  database: "plano",
  table: "Situacoes",
  fields: [
    {
      field: "CdSituacao",
      label: "CdSituacao",
      name: "Situacoes_id",
      type: "int",
      size: 2,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NmSituacao",
      label: "NmSituacao",
      name: "NmSituacao",
      type: "string",
      size: 40,
    },
    {
      field: "AlteraSolucao",
      label: "AlteraSolucao",
      name: "AlteraSolucao",
      type: "string",
      size: 1,
    },
    {
      field: "ExigeDetalhes",
      label: "ExigeDetalhes",
      name: "ExigeDetalhes",
      type: "string",
      size: 1,
    },
    {
      field: "ExigeTecnico",
      label: "ExigeTecnico",
      name: "ExigeTecnico",
      type: "string",
      size: 1,
    },
  ],
};
