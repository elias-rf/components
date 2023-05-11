import { TTableDef } from "@/types/model";

export const FasesProducao: TTableDef = {
  database: "plano",
  table: "FasesProducao",
  fields: [
    {
      field: "CdFase",
      label: "CdFase",
      name: "CdFase",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",

      allowNull: false,
    },
  ],
};
