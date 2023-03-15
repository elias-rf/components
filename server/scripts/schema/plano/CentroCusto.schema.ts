import { TTable } from "../../../../types/model";

export const CentroCusto: TTable = {
  database: "plano",
  table: "CentroCusto",
  fields: [
    {
      field: "CdCentroCusto",
      label: "CdCentroCusto",
      name: "CentroCusto_id",
      typeField: "float",
      size: 8,
      scale: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",
      size: 50,
    },
  ],
};
