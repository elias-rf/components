import { TEntity } from "../../../../types";

export const EstoqueFaltas: TEntity = {
  database: "plano",
  table: "EstoqueFaltas",
  schema: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      type: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      type: "string",
      size: 15,
      allowNull: false,
    },
    {
      field: "DtInicial",
      label: "DtInicial",
      name: "DtInicial",
      type: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "DtFinal",
      label: "DtFinal",
      name: "DtFinal",
      type: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
  ],
};
