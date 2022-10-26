import { TEntity } from "../../../../types";

export const ProbRelSaude: TEntity = {
  database: "plano",
  table: "ProbRelSaude",
  schema: [
    {
      field: "CdPrs",
      label: "CdPrs",
      name: "CdPrs",
      type: "string",
      size: 8,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      type: "string",
      size: 40,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      type: "datetime",
      size: 8,
      scale: 3,
    },
  ],
};
