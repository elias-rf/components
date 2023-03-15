import { TTable } from "../../../../types/model";

export const TabFer: TTable = {
  database: "plano",
  table: "TabFer",
  fields: [
    {
      field: "DtBase",
      label: "DtBase",
      name: "DtBase",
      typeField: "date",
      size: 4,
    },
    {
      field: "Tipo",
      label: "Tipo",
      name: "Tipo",
      typeField: "string",
      size: 1,
    },
  ],
};
