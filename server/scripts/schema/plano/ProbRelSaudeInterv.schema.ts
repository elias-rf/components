import { TTableDef } from "@/types/model";

export const ProbRelSaudeInterv: TTableDef = {
  database: "plano",
  table: "ProbRelSaudeInterv",
  fields: [
    {
      field: "CdIntervencao",
      label: "CdIntervencao",
      name: "CdIntervencao",
      typeField: "float",

      scale: 4,
    },
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CdCliente",
      typeField: "float",

      scale: 4,
    },
    {
      field: "CdPrs",
      label: "CdPrs",
      name: "CdPrs",
      typeField: "string",
    },
    {
      field: "Data",
      label: "Data",
      name: "Data",
      typeField: "datetime",

      scale: 3,
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
