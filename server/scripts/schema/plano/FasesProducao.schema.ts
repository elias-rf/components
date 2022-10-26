import { TEntity } from "../../../../types";

export const FasesProducao: TEntity = {
  database: "plano",
  table: "FasesProducao",
  schema: [
    {
      field: "CdFase",
      label: "CdFase",
      name: "CdFase",
      type: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      type: "string",
      size: 40,
      allowNull: false,
    },
  ],
};
