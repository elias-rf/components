import { TTableDef } from "@/types/model";

export const ProdutoCombustivel: TTableDef = {
  database: "plano",
  table: "ProdutoCombustivel",
  fields: [
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "ProdutoCombustivel_id",
      typeField: "string",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "CdANP",
      label: "CdANP",
      name: "CdANP",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CdCODIF",
      label: "CdCODIF",
      name: "CdCODIF",
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
    {
      field: "PercGasNatural",
      label: "PercGasNatural",
      name: "PercGasNatural",
      typeField: "float",

      scale: 4,
    },
    {
      field: "PercGasNaturalNac",
      label: "PercGasNaturalNac",
      name: "PercGasNaturalNac",
      typeField: "int",

      scale: 4,
    },
    {
      field: "PercGasNaturalImp",
      label: "PercGasNaturalImp",
      name: "PercGasNaturalImp",
      typeField: "int",

      scale: 4,
    },
    {
      field: "VlPartida",
      label: "VlPartida",
      name: "VlPartida",
      typeField: "int",

      scale: 4,
    },
    {
      field: "DescricaoANP",
      label: "DescricaoANP",
      name: "DescricaoANP",
      typeField: "string",
    },
  ],
};
