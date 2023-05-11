import { TTableDef } from "@/types/model";

export const CadProDescPgto: TTableDef = {
  database: "plano",
  table: "CadProDescPgto",
  fields: [
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "PrazoMedio",
      label: "PrazoMedio",
      name: "PrazoMedio",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "DescVendedor",
      label: "DescVendedor",
      name: "DescVendedor",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "DescGerente",
      label: "DescGerente",
      name: "DescGerente",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "DescVendedorConsFinal",
      label: "DescVendedorConsFinal",
      name: "DescVendedorConsFinal",
      typeField: "float",

      scale: 4,
    },
    {
      field: "DescGerenteConsFinal",
      label: "DescGerenteConsFinal",
      name: "DescGerenteConsFinal",
      typeField: "float",

      scale: 4,
    },
  ],
};
