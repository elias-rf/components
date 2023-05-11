import { TTableDef } from "@/types";

export const produto_estatistica: TTableDef = {
  database: "plano",
  table: "EstatPro",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "filial_id",
      typeField: "int",

      allowNull: false,
      primaryKey: true,
    },
    {
      field: "AnoRef",
      label: "AnoRef",
      name: "ano",
      typeField: "int",

      allowNull: false,
      primaryKey: true,
    },
    {
      field: "MesRef",
      label: "MesRef",
      name: "mes",
      typeField: "int",

      allowNull: false,
      primaryKey: true,
    },
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "produto_plano_id",
      typeField: "string",

      allowNull: false,
      primaryKey: true,
    },
    {
      field: "EstInicial",
      label: "EstInicial",
      name: "inicial",
      typeField: "float",

      scale: 4,
    },
    {
      field: "Entradas",
      label: "Entradas",
      name: "entrada",
      typeField: "float",

      scale: 4,
    },
    {
      field: "Saidas",
      label: "Saidas",
      name: "saida",
      typeField: "float",

      scale: 4,
    },
    {
      field: "Ajustes",
      label: "Ajustes",
      name: "ajuste",
      typeField: "float",

      scale: 4,
    },
    {
      field: "QtdCompras",
      label: "QtdCompras",
      name: "quantidade_compra",
      typeField: "float",

      scale: 4,
    },
    {
      field: "QtdMedio",
      label: "QtdMedio",
      name: "quantidade_medio",
      typeField: "float",

      scale: 4,
    },
    {
      field: "QtdVendas",
      label: "QtdVendas",
      name: "quantidade_venda",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlCusto",
      label: "VlCusto",
      name: "valor_custo",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlMedio",
      label: "VlMedio",
      name: "valor_dedio",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlVendas",
      label: "VlVendas",
      name: "valor_vendas",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlCustoMedio",
      label: "VlCustoMedio",
      name: "valor_custo_medio",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlVenda",
      label: "VlVenda",
      name: "valor_venda",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlAtacado",
      label: "VlAtacado",
      name: "valor_atacado",
      typeField: "float",

      scale: 4,
    },
    {
      field: "EstInicialPsico",
      label: "EstInicialPsico",
      name: "inicial_psico",
      typeField: "float",

      scale: 4,
    },
  ],
};
