import { TTableDef } from "@/types/model";

export const CentroCusto: TTableDef = {
  database: "plano",
  table: "CentroCusto",
  fields: [
    {
      field: "CdCentroCusto",
      label: "CdCentroCusto",
      name: "CentroCusto_id",
      typeField: "float",

      scale: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",
    },
  ],
};
