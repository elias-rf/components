import { TTable } from "../../../../types/model";

export const TipDoc: TTable = {
  database: "plano",
  table: "TipDoc",
  fields: [
    {
      field: "Codigo",
      label: "Codigo",
      name: "TipDoc_id",
      typeField: "string",
      size: 3,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",
      size: 32,
    },
    {
      field: "FgConsiderarDanfe",
      label: "FgConsiderarDanfe",
      name: "FgConsiderarDanfe",
      typeField: "string",
      size: 1,
    },
    {
      field: "FgMovimentoCheque",
      label: "FgMovimentoCheque",
      name: "FgMovimentoCheque",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "FgAtivo",
      label: "FgAtivo",
      name: "FgAtivo",
      typeField: "string",
      size: 1,
    },
    {
      field: "FgConsiderarXML",
      label: "FgConsiderarXML",
      name: "FgConsiderarXML",
      typeField: "string",
      size: 1,
    },
  ],
};
