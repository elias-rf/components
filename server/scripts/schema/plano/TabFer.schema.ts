import { TTableDef } from "@/types/model";

export const TabFer: TTableDef = {
  database: "plano",
  table: "TabFer",
  fields: [
    {
      field: "DtBase",
      label: "DtBase",
      name: "DtBase",
      typeField: "date",
    },
    {
      field: "Tipo",
      label: "Tipo",
      name: "Tipo",
      typeField: "string",
    },
  ],
};
