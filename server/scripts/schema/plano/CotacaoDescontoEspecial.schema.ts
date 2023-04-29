import { TTableDef } from "@mono/types/model";

export const CotacaoDescontoEspecial: TTableDef = {
  database: "plano",
  table: "CotacaoDescontoEspecial",
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
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",
      size: 16,
      allowNull: false,
    },
    {
      field: "Nivel1",
      label: "Nivel1",
      name: "Nivel1",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "Nivel2",
      label: "Nivel2",
      name: "Nivel2",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "Nivel3",
      label: "Nivel3",
      name: "Nivel3",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "DtValidade",
      label: "DtValidade",
      name: "DtValidade",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
  ],
};
