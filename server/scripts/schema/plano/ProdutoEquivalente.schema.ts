import { TTableDef } from "@/types/model";

export const ProdutoEquivalente: TTableDef = {
  database: "plano",
  table: "ProdutoEquivalente",
  fields: [
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CdProdutoEquivalente",
      label: "CdProdutoEquivalente",
      name: "CdProdutoEquivalente",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
  ],
};
