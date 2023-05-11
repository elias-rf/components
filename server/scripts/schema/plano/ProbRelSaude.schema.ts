import { TTableDef } from "@/types/model";

export const ProbRelSaude: TTableDef = {
  database: "plano",
  table: "ProbRelSaude",
  fields: [
    {
      field: "CdPrs",
      label: "CdPrs",
      name: "CdPrs",
      typeField: "string",
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",

      scale: 3,
    },
  ],
};
