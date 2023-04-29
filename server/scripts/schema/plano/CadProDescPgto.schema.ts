import { TTableDef } from "@mono/types/model";

export const CadProDescPgto: TTableDef = {
  database: "plano",
  table: "CadProDescPgto",
  fields: [
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",
      size: 16,
      allowNull: false,
    },
    {
      field: "PrazoMedio",
      label: "PrazoMedio",
      name: "PrazoMedio",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "DescVendedor",
      label: "DescVendedor",
      name: "DescVendedor",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "DescGerente",
      label: "DescGerente",
      name: "DescGerente",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "DescVendedorConsFinal",
      label: "DescVendedorConsFinal",
      name: "DescVendedorConsFinal",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "DescGerenteConsFinal",
      label: "DescGerenteConsFinal",
      name: "DescGerenteConsFinal",
      typeField: "float",
      size: 8,
      scale: 4,
    },
  ],
};
