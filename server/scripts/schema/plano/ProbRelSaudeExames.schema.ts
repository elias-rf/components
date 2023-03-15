import { TTable } from "../../../../types/model";

export const ProbRelSaudeExames: TTable = {
  database: "plano",
  table: "ProbRelSaudeExames",
  fields: [
    {
      field: "CdPrs",
      label: "CdPrs",
      name: "CdPrs",
      typeField: "string",
      size: 8,
    },
    {
      field: "Data",
      label: "Data",
      name: "Data",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CdCliente",
      typeField: "string",
      size: 15,
    },
  ],
};
