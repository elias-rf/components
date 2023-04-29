import { TTableDef } from "@mono/types/model";

export const ConfiguracaoImpProdutos: TTableDef = {
  database: "plano",
  table: "ConfiguracaoImpProdutos",
  fields: [
    {
      field: "IdLayOut",
      label: "IdLayOut",
      name: "ConfiguracaoImpProdutos_id",
      typeField: "string",
      size: 10,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "CdProdutoInicial",
      label: "CdProdutoInicial",
      name: "CdProdutoInicial",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "CdProdutoFinal",
      label: "CdProdutoFinal",
      name: "CdProdutoFinal",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "CdReferenciaInicial",
      label: "CdReferenciaInicial",
      name: "CdReferenciaInicial",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "CdreferenciaFinal",
      label: "CdreferenciaFinal",
      name: "CdreferenciaFinal",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "DescricaoInicial",
      label: "DescricaoInicial",
      name: "DescricaoInicial",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "DescricaoFinal",
      label: "DescricaoFinal",
      name: "DescricaoFinal",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "CdDepartamentoInicial",
      label: "CdDepartamentoInicial",
      name: "CdDepartamentoInicial",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "CdDepartamentoFinal",
      label: "CdDepartamentoFinal",
      name: "CdDepartamentoFinal",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "CdDepartamentoPadrao",
      label: "CdDepartamentoPadrao",
      name: "CdDepartamentoPadrao",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "CdCategoriaInicial",
      label: "CdCategoriaInicial",
      name: "CdCategoriaInicial",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "CdCategoriaFinal",
      label: "CdCategoriaFinal",
      name: "CdCategoriaFinal",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "CdCategoriaPadrao",
      label: "CdCategoriaPadrao",
      name: "CdCategoriaPadrao",
      typeField: "string",
      size: 5,
      allowNull: false,
    },
    {
      field: "CdFornecedorInicial",
      label: "CdFornecedorInicial",
      name: "CdFornecedorInicial",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "CdFornecedorFinal",
      label: "CdFornecedorFinal",
      name: "CdFornecedorFinal",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "CdFornecedorPadrao",
      label: "CdFornecedorPadrao",
      name: "CdFornecedorPadrao",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "CdFabricanteInicial",
      label: "CdFabricanteInicial",
      name: "CdFabricanteInicial",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "CdFabricanteFinal",
      label: "CdFabricanteFinal",
      name: "CdFabricanteFinal",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "CdFabricantePadrao",
      label: "CdFabricantePadrao",
      name: "CdFabricantePadrao",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "UnidadeInicial",
      label: "UnidadeInicial",
      name: "UnidadeInicial",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "UnidadeFinal",
      label: "UnidadeFinal",
      name: "UnidadeFinal",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "UnidadePadrao",
      label: "UnidadePadrao",
      name: "UnidadePadrao",
      typeField: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "VlTabelaInicial",
      label: "VlTabelaInicial",
      name: "VlTabelaInicial",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "VlTabelaFinal",
      label: "VlTabelaFinal",
      name: "VlTabelaFinal",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "VlTabelaDecimais",
      label: "VlTabelaDecimais",
      name: "VlTabelaDecimais",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "VlCustoInicial",
      label: "VlCustoInicial",
      name: "VlCustoInicial",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "VlCustoFinal",
      label: "VlCustoFinal",
      name: "VlCustoFinal",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "VlCustoDecimais",
      label: "VlCustoDecimais",
      name: "VlCustoDecimais",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "VlAtacadoInicial",
      label: "VlAtacadoInicial",
      name: "VlAtacadoInicial",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "VlAtacadoFinal",
      label: "VlAtacadoFinal",
      name: "VlAtacadoFinal",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "VlAtacadoDecimais",
      label: "VlAtacadoDecimais",
      name: "VlAtacadoDecimais",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "VlVarejoInicial",
      label: "VlVarejoInicial",
      name: "VlVarejoInicial",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "VlVarejoFinal",
      label: "VlVarejoFinal",
      name: "VlVarejoFinal",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "VlVarejoDecimais",
      label: "VlVarejoDecimais",
      name: "VlVarejoDecimais",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "DescricaoContInicial",
      label: "DescricaoContInicial",
      name: "DescricaoContInicial",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "DescricaoContFinal",
      label: "DescricaoContFinal",
      name: "DescricaoContFinal",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "CompDescricaoInicial",
      label: "CompDescricaoInicial",
      name: "CompDescricaoInicial",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "CompDescricaoFinal",
      label: "CompDescricaoFinal",
      name: "CompDescricaoFinal",
      typeField: "float",
      size: 8,
      scale: 4,
    },
  ],
};
