import { TEntity } from "@er/types/*";

export const nf_entrada_controle: TEntity = {
  database: "plano",
  table: "phonebook",
  fields: [
    {
      field: "CdFilial",
      label: "Filial",
      name: "filial_id",
      primaryKey: true,
      type: "string",
    },
    {
      field: "NumNota",
      label: "Nota",
      name: "nota_id",
      primaryKey: true,
      type: "string",
    },
    {
      field: "Serie",
      label: "Série",
      name: "serie_id",
      primaryKey: true,
      type: "string",
    },
    {
      field: "Modelo",
      label: "Modelo",
      name: "modelo_id",
      primaryKey: true,
      type: "string",
    },
    {
      field: "CdFornecedor",
      label: "Cód Fornecedor",
      name: "fornecedor_id",
      type: "string",
    },
    {
      field: "CdProduto",
      label: "Cód Produto",
      name: "produto_id",
      type: "string",
    },
    {
      field: "NumLote",
      label: "Controle",
      name: "controle",
      type: "string",
    },
    {
      field: "Quantidade",
      label: "Quantidade",
      name: "quantidade",
      type: "string",
    },
  ],
};
