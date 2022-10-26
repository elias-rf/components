import { TEntity } from "../../../../types";

export const FornecedorCentroCusto: TEntity = {
  database: "plano",
  table: "FornecedorCentroCusto",
  schema: [
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
