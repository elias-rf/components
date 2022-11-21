import { TTable } from "../types";

export const estoque: TTable = {
  database: "plano",
  table: "Estoque",
  fields: [
    {
      field: "CdEmpresa",
      label: "Empresa",
      name: "filial_id",
      primaryKey: true,
      type: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "CdProduto",
      label: "Produto",
      name: "produto_id",
      primaryKey: true,
      type: "string",
      size: 15,
      allowNull: false,
    },
    {
      field: "EstAtual",
      label: "Estoque",
      name: "estoque",
      type: "int",
    },
  ],
};
