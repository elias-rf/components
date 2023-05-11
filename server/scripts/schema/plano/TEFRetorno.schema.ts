import { TTableDef } from "@/types/model";

export const TEFRetorno: TTableDef = {
  database: "plano",
  table: "TEFRetorno",
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
      field: "TipoCampo",
      label: "TipoCampo",
      name: "TipoCampo",
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
  ],
};
