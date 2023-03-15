import { TTable } from "../../../../types/model";

export const FornecedorCentroCusto: TTable = {
  database: "plano",
  table: "FornecedorCentroCusto",
  fields: [
    {
      field: "CdFornecedor",
      label: "CdFornecedor",
      name: "CdFornecedor",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "CdCentroCusto",
      label: "CdCentroCusto",
      name: "CdCentroCusto",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "Percentual",
      label: "Percentual",
      name: "Percentual",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
  ],
};
