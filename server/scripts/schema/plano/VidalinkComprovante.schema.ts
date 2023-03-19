import { TTableDef } from "../../../../types/model";

export const VidalinkComprovante: TTableDef = {
  database: "plano",
  table: "VidalinkComprovante",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "NumCupom",
      label: "NumCupom",
      name: "NumCupom",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "Sequencia",
      label: "Sequencia",
      name: "Sequencia",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "Texto",
      label: "Texto",
      name: "Texto",
      typeField: "string",
      size: 64,
      allowNull: false,
    },
    {
      field: "NumAutorizacao",
      label: "NumAutorizacao",
      name: "NumAutorizacao",
      typeField: "float",
      size: 8,
      scale: 4,
    },
  ],
};
