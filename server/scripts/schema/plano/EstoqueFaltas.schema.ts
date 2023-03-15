import { TTable } from "../../../../types/model";

export const EstoqueFaltas: TTable = {
  database: "plano",
  table: "EstoqueFaltas",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",
      size: 15,
      allowNull: false,
    },
    {
      field: "DtInicial",
      label: "DtInicial",
      name: "DtInicial",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "DtFinal",
      label: "DtFinal",
      name: "DtFinal",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
  ],
};
