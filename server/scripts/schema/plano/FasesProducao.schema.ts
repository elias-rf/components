import { TTable } from "../../../../types/model";

export const FasesProducao: TTable = {
  database: "plano",
  table: "FasesProducao",
  fields: [
    {
      field: "CdFase",
      label: "CdFase",
      name: "CdFase",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",
      size: 40,
      allowNull: false,
    },
  ],
};
