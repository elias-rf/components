import { TTableDef } from "../../types";

export const estoque: TTableDef = {
  database: "plano",
  table: "Estoque",
  fields: [
    {
      field: "CdEmpresa",
      label: "Empresa",
      name: "filial_id",
      primaryKey: true,
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "CdProduto",
      label: "Produto",
      name: "produto_plano_id",
      primaryKey: true,
      typeField: "string",
      size: 15,
      allowNull: false,
    },
    {
      field: "EstAtual",
      label: "Estoque",
      name: "estoque",
      typeField: "int",
    },
  ],
};
