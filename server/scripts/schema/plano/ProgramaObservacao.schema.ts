import { TTableDef } from "../../../../types/model";

export const ProgramaObservacao: TTableDef = {
  database: "plano",
  table: "ProgramaObservacao",
  fields: [
    {
      field: "CdPrograma",
      label: "CdPrograma",
      name: "ProgramaObservacao_id",
      typeField: "int",
      size: 2,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Observacao",
      label: "Observacao",
      name: "Observacao",
      typeField: "string",
      size: 1024,
      allowNull: false,
    },
  ],
};
