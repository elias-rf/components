import { TTable } from "../../../../types";

export const FornecedorCentroCusto: TTable = {
  database: "plano",
  table: "FornecedorCentroCusto",
  fields: [
    {
      field: "CdFornecedor",
      label: "CdFornecedor",
      name: "CdFornecedor",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "CdCentroCusto",
      label: "CdCentroCusto",
      name: "CdCentroCusto",
      type: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "Percentual",
      label: "Percentual",
      name: "Percentual",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
  ],
};
