import { TEntity } from "../../../../types";

export const TabMovCSituacao: TEntity = {
  database: "plano",
  table: "TabMovCSituacao",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "SeqCaixa",
      label: "SeqCaixa",
      name: "SeqCaixa",
      type: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "FgSituacao",
      label: "FgSituacao",
      name: "FgSituacao",
      type: "string",
      size: 1,
      allowNull: false,
    },
  ],
};
