import { TTable } from "../../types";

export const produto: TTable = {
  database: "oftalmo",
  table: "tbl_Produto",
  fields: [
    {
      field: "kProduto",
      label: "kProduto",
      name: "produto_id",
      typeField: "int",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "fkCategoria",
      label: "fkCategoria",
      name: "categoria_id",
      typeField: "string",
      size: 50,
      allowNull: false,
    },
    {
      field: "NomeComercial",
      label: "NomeComercial",
      name: "nome_comercial",
      typeField: "string",
      size: 120,
      allowNull: false,
    },
    {
      field: "Fabricante",
      label: "Fabricante",
      name: "Fabricante",
      typeField: "string",
      size: 50,
    },
    {
      field: "OBS",
      label: "OBS",
      name: "OBS",
      typeField: "string",
      size: 16,
    },
    {
      field: "DescricaoTecnica",
      label: "DescricaoTecnica",
      name: "DescricaoTecnica",
      typeField: "string",
      size: 16,
    },
    {
      field: "DescricaoGenerica",
      label: "DescricaoGenerica",
      name: "DescricaoGenerica",
      typeField: "string",
      size: 16,
    },
    {
      field: "GrupoCredito",
      label: "GrupoCredito",
      name: "GrupoCredito",
      typeField: "string",
      size: 20,
      allowNull: false,
      defaultValue: "Geral",
    },
    {
      field: "fkSubCategoria",
      label: "fkSubCategoria",
      name: "fkSubCategoria",
      typeField: "int",
      size: 4,
    },
  ],
  associates: {
    produto_item: {
      typeField: "00",
      source: ["produto_id"],
      target: ["produto_id"],
    },
  },
};
