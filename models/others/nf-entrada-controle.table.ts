import { TTableDef } from "@/types";

export const nf_entrada_controle: TTableDef = {
  database: "plano",
  table: "LotesNotaEntrada",
  fields: [
    {
      field: "CdFilial",
      label: "Filial",
      name: "filial_id",
      primaryKey: true,
      typeField: "int",
      allowNull: false,
    },
    {
      field: "NumNota",
      label: "Nota",
      name: "nota_id",
      primaryKey: true,
      typeField: "int",
      allowNull: false,
    },
    {
      field: "Serie",
      label: "Série",
      name: "serie_id",
      primaryKey: true,
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Modelo",
      label: "Modelo",
      name: "modelo_id",
      primaryKey: true,
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CdFornecedor",
      label: "Cód Fornecedor",
      name: "fornecedor_id",
      typeField: "int",
      allowNull: false,
    },
    {
      field: "CdProduto",
      label: "Cód Produto",
      name: "produto_plano_id",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "NumLote",
      label: "Controle",
      name: "controle",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Quantidade",
      label: "Quantidade",
      name: "quantidade",
      typeField: "int",
      allowNull: false,
    },
  ],
};
