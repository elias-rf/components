import { TTable } from "../../../../types/model";

export const SubstituicaoProd: TTable = {
  database: "plano",
  table: "SubstituicaoProd",
  fields: [
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",
      size: 15,
      allowNull: false,
    },
    {
      field: "CdAssociado",
      label: "CdAssociado",
      name: "CdAssociado",
      typeField: "string",
      size: 15,
      allowNull: false,
    },
  ],
};
