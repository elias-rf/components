import { TTable } from "../../../../types";

export const TabFer: TTable = {
  database: "plano",
  table: "TabFer",
  fields: [
    {
      field: "DtBase",
      label: "DtBase",
      name: "DtBase",
      type: "date",
      size: 4,
    },
    {
      field: "Tipo",
      label: "Tipo",
      name: "Tipo",
      type: "string",
      size: 1,
    },
  ],
};
