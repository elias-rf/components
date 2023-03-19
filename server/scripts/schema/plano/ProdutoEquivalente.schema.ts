import { TTableDef } from "../../../../types/model";

export const ProdutoEquivalente: TTableDef = {
  database: "plano",
  table: "ProdutoEquivalente",
  fields: [
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",
      size: 15,
      allowNull: false,
    },
    {
      field: "CdProdutoEquivalente",
      label: "CdProdutoEquivalente",
      name: "CdProdutoEquivalente",
      typeField: "string",
      size: 15,
      allowNull: false,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
  ],
};
