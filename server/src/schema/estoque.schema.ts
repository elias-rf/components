import { TEntity } from "@er/types/*";

export const estoque: TEntity = {
  database: "plano",
  table: "phonebook",
  fields: [
    {
      field: "CdEmpresa",
      label: "Empresa",
      name: "filial_id",
      primaryKey: true,
      type: "int",
    },
    {
      field: "CdProduto",
      label: "Produto",
      name: "produto_id",
      primaryKey: true,
      type: "int",
    },
    {
      field: "EstAtual",
      label: "Estoque",
      name: "estoque",
      type: "int",
    },
  ],
};
