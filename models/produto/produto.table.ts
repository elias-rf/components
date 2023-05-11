import { TTableDef } from "@/types";

export const produto: TTableDef = {
  database: "oftalmo",
  table: "tbl_Produto",
  fields: [
    {
      field: "kProduto",
      label: "kProduto",
      name: "produto_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "fkCategoria",
      label: "fkCategoria",
      name: "categoria_id",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "NomeComercial",
      label: "NomeComercial",
      name: "nome_comercial",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Fabricante",
      label: "Fabricante",
      name: "Fabricante",
      typeField: "string",
    },
    {
      field: "OBS",
      label: "OBS",
      name: "OBS",
      typeField: "string",
    },
    {
      field: "DescricaoTecnica",
      label: "DescricaoTecnica",
      name: "DescricaoTecnica",
      typeField: "string",
    },
    {
      field: "DescricaoGenerica",
      label: "DescricaoGenerica",
      name: "DescricaoGenerica",
      typeField: "string",
    },
    {
      field: "GrupoCredito",
      label: "GrupoCredito",
      name: "GrupoCredito",
      typeField: "string",

      allowNull: false,
      defaultValue: "Geral",
    },
    {
      field: "fkSubCategoria",
      label: "fkSubCategoria",
      name: "fkSubCategoria",
      typeField: "int",
    },
  ],
  associates: {
    produto_item: {
      type: "00",
      source: ["produto_id"],
      target: ["produto_id"],
    },
  },
};
