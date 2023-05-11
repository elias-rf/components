import { TTableDef } from "@/types/model";

export const ConfiguracaoImpProdutos: TTableDef = {
  database: "plano",
  table: "ConfiguracaoImpProdutos",
  fields: [
    {
      field: "IdLayOut",
      label: "IdLayOut",
      name: "ConfiguracaoImpProdutos_id",
      typeField: "string",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "CdProdutoInicial",
      label: "CdProdutoInicial",
      name: "CdProdutoInicial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdProdutoFinal",
      label: "CdProdutoFinal",
      name: "CdProdutoFinal",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdReferenciaInicial",
      label: "CdReferenciaInicial",
      name: "CdReferenciaInicial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdreferenciaFinal",
      label: "CdreferenciaFinal",
      name: "CdreferenciaFinal",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "DescricaoInicial",
      label: "DescricaoInicial",
      name: "DescricaoInicial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "DescricaoFinal",
      label: "DescricaoFinal",
      name: "DescricaoFinal",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdDepartamentoInicial",
      label: "CdDepartamentoInicial",
      name: "CdDepartamentoInicial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdDepartamentoFinal",
      label: "CdDepartamentoFinal",
      name: "CdDepartamentoFinal",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdDepartamentoPadrao",
      label: "CdDepartamentoPadrao",
      name: "CdDepartamentoPadrao",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdCategoriaInicial",
      label: "CdCategoriaInicial",
      name: "CdCategoriaInicial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdCategoriaFinal",
      label: "CdCategoriaFinal",
      name: "CdCategoriaFinal",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdCategoriaPadrao",
      label: "CdCategoriaPadrao",
      name: "CdCategoriaPadrao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CdFornecedorInicial",
      label: "CdFornecedorInicial",
      name: "CdFornecedorInicial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdFornecedorFinal",
      label: "CdFornecedorFinal",
      name: "CdFornecedorFinal",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdFornecedorPadrao",
      label: "CdFornecedorPadrao",
      name: "CdFornecedorPadrao",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "CdFabricanteInicial",
      label: "CdFabricanteInicial",
      name: "CdFabricanteInicial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdFabricanteFinal",
      label: "CdFabricanteFinal",
      name: "CdFabricanteFinal",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdFabricantePadrao",
      label: "CdFabricantePadrao",
      name: "CdFabricantePadrao",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "UnidadeInicial",
      label: "UnidadeInicial",
      name: "UnidadeInicial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "UnidadeFinal",
      label: "UnidadeFinal",
      name: "UnidadeFinal",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "UnidadePadrao",
      label: "UnidadePadrao",
      name: "UnidadePadrao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "VlTabelaInicial",
      label: "VlTabelaInicial",
      name: "VlTabelaInicial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "VlTabelaFinal",
      label: "VlTabelaFinal",
      name: "VlTabelaFinal",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "VlTabelaDecimais",
      label: "VlTabelaDecimais",
      name: "VlTabelaDecimais",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "VlCustoInicial",
      label: "VlCustoInicial",
      name: "VlCustoInicial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "VlCustoFinal",
      label: "VlCustoFinal",
      name: "VlCustoFinal",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "VlCustoDecimais",
      label: "VlCustoDecimais",
      name: "VlCustoDecimais",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "VlAtacadoInicial",
      label: "VlAtacadoInicial",
      name: "VlAtacadoInicial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "VlAtacadoFinal",
      label: "VlAtacadoFinal",
      name: "VlAtacadoFinal",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "VlAtacadoDecimais",
      label: "VlAtacadoDecimais",
      name: "VlAtacadoDecimais",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "VlVarejoInicial",
      label: "VlVarejoInicial",
      name: "VlVarejoInicial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "VlVarejoFinal",
      label: "VlVarejoFinal",
      name: "VlVarejoFinal",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "VlVarejoDecimais",
      label: "VlVarejoDecimais",
      name: "VlVarejoDecimais",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "DescricaoContInicial",
      label: "DescricaoContInicial",
      name: "DescricaoContInicial",
      typeField: "float",

      scale: 4,
    },
    {
      field: "DescricaoContFinal",
      label: "DescricaoContFinal",
      name: "DescricaoContFinal",
      typeField: "float",

      scale: 4,
    },
    {
      field: "CompDescricaoInicial",
      label: "CompDescricaoInicial",
      name: "CompDescricaoInicial",
      typeField: "float",

      scale: 4,
    },
    {
      field: "CompDescricaoFinal",
      label: "CompDescricaoFinal",
      name: "CompDescricaoFinal",
      typeField: "float",

      scale: 4,
    },
  ],
};
