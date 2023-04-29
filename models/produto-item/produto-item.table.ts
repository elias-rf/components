import { TTableDef } from "@mono/types";

export const produto_item: TTableDef = {
  database: "oftalmo",
  table: "tbl_Produto_Item",
  fields: [
    {
      field: "kProdutoItem",
      label: "Modelo",
      name: "produto_item_id",
      typeField: "int",
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NomeProdutoItem",
      label: "NomeProdutoItem",
      name: "nome_produto_item",
      typeField: "string",
      allowNull: false,
    },
    {
      field: "fkProduto",
      label: "Produto",
      name: "produto_id",
      typeField: "int",
      allowNull: false,
    },
    {
      field: "IdVisiontech",
      label: "Produto plano",
      name: "produto_plano_id",
      typeField: "string",
    },
    {
      field: "ForaDeLinha",
      label: "Fora De Linha",
      name: "fora_linha",
      typeField: "int",
      allowNull: false,
    },
    {
      field: "GrupoCredito",
      label: "Grupo Credito",
      name: "grupo_credito",
      typeField: "string",
    },
  ],
};
