import { TEntity } from "../types";

export const produto_item: TEntity = {
  database: "oftalmo",
  table: "tbl_Produto_Item",
  fields: [
    {
      field: "kProdutoItem",
      label: "Modelo",
      name: "produto_item_id",
      type: "int",
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NomeProdutoItem",
      label: "NomeProdutoItem",
      name: "nome_produto_item",
      type: "string",
      allowNull: false,
    },
    {
      field: "fkProduto",
      label: "Produto",
      name: "produto_id",
      type: "int",
      allowNull: false,
    },
    {
      field: "IdVisiontech",
      label: "Produto plano",
      name: "produto_plano_id",
      type: "string",
    },
    {
      field: "ForaDeLinha",
      label: "Fora De Linha",
      name: "fora_linha",
      type: "int",
      allowNull: false,
    },
    {
      field: "GrupoCredito",
      label: "Grupo Credito",
      name: "grupo_credito",
      type: "string",
    },
  ],
};
