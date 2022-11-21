import { TTable } from "../../../../types";

export const ProgramaObservacao: TTable = {
  database: "plano",
  table: "ProgramaObservacao",
  fields: [
    {
      field: "CdPrograma",
      label: "CdPrograma",
      name: "ProgramaObservacao_id",
      type: "int",
      size: 2,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Observacao",
      label: "Observacao",
      name: "Observacao",
      type: "string",
      size: 1024,
      allowNull: false,
    },
  ],
};
