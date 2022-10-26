import { TEntity } from "../types";

export const produto: TEntity = {
  database: "oftalmo",
  table: "tbl_Produto",
  schema: [
    {
      field: "kProduto",
      label: "kProduto",
      name: "produto_id",
      type: "int",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "fkCategoria",
      label: "fkCategoria",
      name: "categoria_id",
      type: "string",
      size: 50,
      allowNull: false,
    },
    {
      field: "NomeComercial",
      label: "NomeComercial",
      name: "nome_comercial",
      type: "string",
      size: 120,
      allowNull: false,
    },
    {
      field: "Fabricante",
      label: "Fabricante",
      name: "Fabricante",
      type: "string",
      size: 50,
    },
    {
      field: "OBS",
      label: "OBS",
      name: "OBS",
      type: "string",
      size: 16,
    },
    {
      field: "DescricaoTecnica",
      label: "DescricaoTecnica",
      name: "DescricaoTecnica",
      type: "string",
      size: 16,
    },
    {
      field: "DescricaoGenerica",
      label: "DescricaoGenerica",
      name: "DescricaoGenerica",
      type: "string",
      size: 16,
    },
    {
      field: "GrupoCredito",
      label: "GrupoCredito",
      name: "GrupoCredito",
      type: "string",
      size: 20,
      allowNull: false,
      defaultValue: "Geral",
    },
    {
      field: "fkSubCategoria",
      label: "fkSubCategoria",
      name: "fkSubCategoria",
      type: "int",
      size: 4,
    },
  ],
};
