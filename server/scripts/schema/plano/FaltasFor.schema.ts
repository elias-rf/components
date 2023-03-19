import { TTableDef } from "../../../../types/model";

export const FaltasFor: TTableDef = {
  database: "plano",
  table: "FaltasFor",
  fields: [
    {
      field: "CdFornecedor",
      label: "CdFornecedor",
      name: "CdFornecedor",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "CdReferencia",
      label: "CdReferencia",
      name: "CdReferencia",
      typeField: "string",
      size: 15,
    },
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",
      size: 15,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",
      size: 40,
    },
    {
      field: "PrecoV",
      label: "PrecoV",
      name: "PrecoV",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "PrecoF",
      label: "PrecoF",
      name: "PrecoF",
      typeField: "float",
      size: 8,
      scale: 4,
    },
  ],
};
