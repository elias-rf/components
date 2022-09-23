import { TEntity } from "@er/types/*";

export const produto_estatistica: TEntity = {
  database: "plano",
  table: "EstatPro",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "filial_id",
      type: "int",
      size: 2,
      allowNull: false,
      primaryKey: true,
    },
    {
      field: "AnoRef",
      label: "AnoRef",
      name: "ano",
      type: "int",
      size: 2,
      allowNull: false,
      primaryKey: true,
    },
    {
      field: "MesRef",
      label: "MesRef",
      name: "mes",
      type: "int",
      size: 2,
      allowNull: false,
      primaryKey: true,
    },
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "produto_id",
      type: "string",
      size: 15,
      allowNull: false,
      primaryKey: true,
    },
    {
      field: "EstInicial",
      label: "EstInicial",
      name: "inicial",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "Entradas",
      label: "Entradas",
      name: "entrada",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "Saidas",
      label: "Saidas",
      name: "saida",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "Ajustes",
      label: "Ajustes",
      name: "ajuste",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "QtdCompras",
      label: "QtdCompras",
      name: "quantidade_compra",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "QtdMedio",
      label: "QtdMedio",
      name: "quantidade_medio",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "QtdVendas",
      label: "QtdVendas",
      name: "quantidade_venda",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlCusto",
      label: "VlCusto",
      name: "valor_custo",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlMedio",
      label: "VlMedio",
      name: "valor_dedio",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlVendas",
      label: "VlVendas",
      name: "valor_venda",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlCustoMedio",
      label: "VlCustoMedio",
      name: "valor_custo_medio",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlVenda",
      label: "VlVenda",
      name: "valor_venda",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlAtacado",
      label: "VlAtacado",
      name: "valor_atacado",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "EstInicialPsico",
      label: "EstInicialPsico",
      name: "inicial_psico",
      type: "float",
      size: 8,
      scale: 4,
    },
  ],
};