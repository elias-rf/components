import { TTableDef } from "@/types/model";

export const tbl_Produto_Item: TTableDef = {
  database: "oftalmo",
  table: "tbl_Produto_Item",
  fields: [
    {
      field: "kProdutoItem",
      label: "kProdutoItem",
      name: "tbl_Produto_Item_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NomeProdutoItem",
      label: "NomeProdutoItem",
      name: "NomeProdutoItem",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "fkProduto",
      label: "fkProduto",
      name: "fkProduto",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "QtdMinima",
      label: "QtdMinima",
      name: "QtdMinima",
      typeField: "int",

      allowNull: false,
      defaultValue: "0",
    },
    {
      field: "QtdAtual",
      label: "QtdAtual",
      name: "QtdAtual",
      typeField: "int",

      allowNull: false,
      defaultValue: "0",
    },
    {
      field: "QtdMaxima",
      label: "QtdMaxima",
      name: "QtdMaxima",
      typeField: "int",

      allowNull: false,
      defaultValue: "0",
    },
    {
      field: "QtdSeguranca",
      label: "QtdSeguranca",
      name: "QtdSeguranca",
      typeField: "int",

      allowNull: false,
      defaultValue: "0",
    },
    {
      field: "ConsumoMedioMes",
      label: "ConsumoMedioMes",
      name: "ConsumoMedioMes",
      typeField: "float",

      allowNull: false,
      defaultValue: "0",
    },
    {
      field: "ValorVenda",
      label: "ValorVenda",
      name: "ValorVenda",
      typeField: "float",

      scale: 4,
    },
    {
      field: "ValorVendaDolar",
      label: "ValorVendaDolar",
      name: "ValorVendaDolar",
      typeField: "float",

      scale: 4,
    },
    {
      field: "ValorCompra",
      label: "ValorCompra",
      name: "ValorCompra",
      typeField: "float",

      scale: 4,
      allowNull: false,
      defaultValue: "0",
    },
    {
      field: "fkMoedaCompra",
      label: "fkMoedaCompra",
      name: "fkMoedaCompra",
      typeField: "int",
    },
    {
      field: "IdVisiontech",
      label: "IdVisiontech",
      name: "IdVisiontech",
      typeField: "string",
    },
    {
      field: "ForaDeLinha",
      label: "ForaDeLinha",
      name: "ForaDeLinha",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "GrupoCredito",
      label: "GrupoCredito",
      name: "GrupoCredito",
      typeField: "string",
    },
    {
      field: "fkProdutoItemAssociado",
      label: "fkProdutoItemAssociado",
      name: "fkProdutoItemAssociado",
      typeField: "int",
    },
    {
      field: "AvisoEstoqueMinMax",
      label: "AvisoEstoqueMinMax",
      name: "AvisoEstoqueMinMax",
      typeField: "int",

      defaultValue: "0",
    },
  ],
};
