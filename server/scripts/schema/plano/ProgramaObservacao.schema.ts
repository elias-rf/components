import { TTableDef } from "@/types/model";

export const ProgramaObservacao: TTableDef = {
  database: "plano",
  table: "ProgramaObservacao",
  fields: [
    {
      field: "CdPrograma",
      label: "CdPrograma",
      name: "ProgramaObservacao_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Observacao",
      label: "Observacao",
      name: "Observacao",
      typeField: "string",

      allowNull: false,
    },
  ],
};
