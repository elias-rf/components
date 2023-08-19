import { TTableDef } from "@/types";

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

      allowNull: false,
    },
    {
      field: "CdProduto",
      label: "Produto",
      name: "produto_plano_id",
      primaryKey: true,
      typeField: "string",

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
