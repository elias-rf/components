import { TTableDef } from "@/types/model";

export const FornecedorCentroCusto: TTableDef = {
  database: "plano",
  table: "FornecedorCentroCusto",
  fields: [
    {
      field: "CdFornecedor",
      label: "CdFornecedor",
      name: "CdFornecedor",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "CdCentroCusto",
      label: "CdCentroCusto",
      name: "CdCentroCusto",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Percentual",
      label: "Percentual",
      name: "Percentual",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
  ],
};
