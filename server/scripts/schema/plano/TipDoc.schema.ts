import { TTableDef } from "@/types/model";

export const TipDoc: TTableDef = {
  database: "plano",
  table: "TipDoc",
  fields: [
    {
      field: "Codigo",
      label: "Codigo",
      name: "TipDoc_id",
      typeField: "string",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",
    },
    {
      field: "FgConsiderarDanfe",
      label: "FgConsiderarDanfe",
      name: "FgConsiderarDanfe",
      typeField: "string",
    },
    {
      field: "FgMovimentoCheque",
      label: "FgMovimentoCheque",
      name: "FgMovimentoCheque",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgAtivo",
      label: "FgAtivo",
      name: "FgAtivo",
      typeField: "string",
    },
    {
      field: "FgConsiderarXML",
      label: "FgConsiderarXML",
      name: "FgConsiderarXML",
      typeField: "string",
    },
  ],
};
