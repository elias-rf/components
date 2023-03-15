import { TTable } from "../../../../types/model";

export const Etiquetas: TTable = {
  database: "plano",
  table: "Etiquetas",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
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
      field: "Qtde",
      label: "Qtde",
      name: "Qtde",
      typeField: "int",
      size: 4,
    },
    {
      field: "NumSerie",
      label: "NumSerie",
      name: "NumSerie",
      typeField: "string",
      size: 20,
      allowNull: false,
    },
  ],
};
