import { TTableDef } from "@/types/model";

export const TabMovCSituacao: TTableDef = {
  database: "plano",
  table: "TabMovCSituacao",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "SeqCaixa",
      label: "SeqCaixa",
      name: "SeqCaixa",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "FgSituacao",
      label: "FgSituacao",
      name: "FgSituacao",
      typeField: "string",

      allowNull: false,
    },
  ],
};
