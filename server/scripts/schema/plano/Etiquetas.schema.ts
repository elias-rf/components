import { TEntity } from "../../../../types";

export const Etiquetas: TEntity = {
  database: "plano",
  table: "Etiquetas",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
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
      field: "Qtde",
      label: "Qtde",
      name: "Qtde",
      type: "int",
      size: 4,
    },
    {
      field: "NumSerie",
      label: "NumSerie",
      name: "NumSerie",
      type: "string",
      size: 20,
      allowNull: false,
    },
  ],
};
