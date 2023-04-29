import { TTableDef } from "@mono/types/model";

export const TEFRetorno: TTableDef = {
  database: "plano",
  table: "TEFRetorno",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "NumCupom",
      label: "NumCupom",
      name: "NumCupom",
      typeField: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "Sequencia",
      label: "Sequencia",
      name: "Sequencia",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "TipoCampo",
      label: "TipoCampo",
      name: "TipoCampo",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "Texto",
      label: "Texto",
      name: "Texto",
      typeField: "string",
      size: 2048,
      allowNull: false,
    },
  ],
};
