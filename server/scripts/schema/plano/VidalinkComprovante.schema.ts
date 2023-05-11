import { TTableDef } from "@/types/model";

export const VidalinkComprovante: TTableDef = {
  database: "plano",
  table: "VidalinkComprovante",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumCupom",
      label: "NumCupom",
      name: "NumCupom",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Sequencia",
      label: "Sequencia",
      name: "Sequencia",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Texto",
      label: "Texto",
      name: "Texto",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "NumAutorizacao",
      label: "NumAutorizacao",
      name: "NumAutorizacao",
      typeField: "float",

      scale: 4,
    },
  ],
};
