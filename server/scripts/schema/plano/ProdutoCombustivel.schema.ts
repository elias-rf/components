import { TEntity } from "../../../../types";

export const ProdutoCombustivel: TEntity = {
  database: "plano",
  table: "ProdutoCombustivel",
  fields: [
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "ProdutoCombustivel_id",
      type: "string",
      size: 16,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "CdANP",
      label: "CdANP",
      name: "CdANP",
      type: "string",
      size: 9,
      allowNull: false,
    },
    {
      field: "CdCODIF",
      label: "CdCODIF",
      name: "CdCODIF",
      type: "string",
      size: 21,
      allowNull: false,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      type: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "PercGasNatural",
      label: "PercGasNatural",
      name: "PercGasNatural",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "PercGasNaturalNac",
      label: "PercGasNaturalNac",
      name: "PercGasNaturalNac",
      type: "int",
      size: 5,
      scale: 4,
    },
    {
      field: "PercGasNaturalImp",
      label: "PercGasNaturalImp",
      name: "PercGasNaturalImp",
      type: "int",
      size: 5,
      scale: 4,
    },
    {
      field: "VlPartida",
      label: "VlPartida",
      name: "VlPartida",
      type: "int",
      size: 9,
      scale: 4,
    },
    {
      field: "DescricaoANP",
      label: "DescricaoANP",
      name: "DescricaoANP",
      type: "string",
      size: 95,
    },
  ],
};
