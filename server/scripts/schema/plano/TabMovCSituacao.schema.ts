import { TTableDef } from "@mono/types/model";

export const TabMovCSituacao: TTableDef = {
  database: "plano",
  table: "TabMovCSituacao",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "SeqCaixa",
      label: "SeqCaixa",
      name: "SeqCaixa",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "FgSituacao",
      label: "FgSituacao",
      name: "FgSituacao",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
  ],
};
