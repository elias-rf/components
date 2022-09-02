import { TEntity } from "@er/types/*";

export const ConfiguracaoImpProdutos: TEntity =
  {
  "database": "plano",
  "table": "ConfiguracaoImpProdutos",
  "fields": [
    {
      "field": "IdLayOut",
      "label": "IdLayOut",
      "name": "ConfiguracaoImpProdutos_id",
      "type": "string",
      "size": 10,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "CdProdutoInicial",
      "label": "CdProdutoInicial",
      "name": "CdProdutoInicial",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "CdProdutoFinal",
      "label": "CdProdutoFinal",
      "name": "CdProdutoFinal",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "CdReferenciaInicial",
      "label": "CdReferenciaInicial",
      "name": "CdReferenciaInicial",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "CdreferenciaFinal",
      "label": "CdreferenciaFinal",
      "name": "CdreferenciaFinal",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "DescricaoInicial",
      "label": "DescricaoInicial",
      "name": "DescricaoInicial",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "DescricaoFinal",
      "label": "DescricaoFinal",
      "name": "DescricaoFinal",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "CdDepartamentoInicial",
      "label": "CdDepartamentoInicial",
      "name": "CdDepartamentoInicial",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "CdDepartamentoFinal",
      "label": "CdDepartamentoFinal",
      "name": "CdDepartamentoFinal",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "CdDepartamentoPadrao",
      "label": "CdDepartamentoPadrao",
      "name": "CdDepartamentoPadrao",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "CdCategoriaInicial",
      "label": "CdCategoriaInicial",
      "name": "CdCategoriaInicial",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "CdCategoriaFinal",
      "label": "CdCategoriaFinal",
      "name": "CdCategoriaFinal",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "CdCategoriaPadrao",
      "label": "CdCategoriaPadrao",
      "name": "CdCategoriaPadrao",
      "type": "string",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "CdFornecedorInicial",
      "label": "CdFornecedorInicial",
      "name": "CdFornecedorInicial",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "CdFornecedorFinal",
      "label": "CdFornecedorFinal",
      "name": "CdFornecedorFinal",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "CdFornecedorPadrao",
      "label": "CdFornecedorPadrao",
      "name": "CdFornecedorPadrao",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "CdFabricanteInicial",
      "label": "CdFabricanteInicial",
      "name": "CdFabricanteInicial",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "CdFabricanteFinal",
      "label": "CdFabricanteFinal",
      "name": "CdFabricanteFinal",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "CdFabricantePadrao",
      "label": "CdFabricantePadrao",
      "name": "CdFabricantePadrao",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "UnidadeInicial",
      "label": "UnidadeInicial",
      "name": "UnidadeInicial",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "UnidadeFinal",
      "label": "UnidadeFinal",
      "name": "UnidadeFinal",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "UnidadePadrao",
      "label": "UnidadePadrao",
      "name": "UnidadePadrao",
      "type": "string",
      "size": 3,
      "allowNull": false
    },
    {
      "field": "VlTabelaInicial",
      "label": "VlTabelaInicial",
      "name": "VlTabelaInicial",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "VlTabelaFinal",
      "label": "VlTabelaFinal",
      "name": "VlTabelaFinal",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "VlTabelaDecimais",
      "label": "VlTabelaDecimais",
      "name": "VlTabelaDecimais",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "VlCustoInicial",
      "label": "VlCustoInicial",
      "name": "VlCustoInicial",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "VlCustoFinal",
      "label": "VlCustoFinal",
      "name": "VlCustoFinal",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "VlCustoDecimais",
      "label": "VlCustoDecimais",
      "name": "VlCustoDecimais",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "VlAtacadoInicial",
      "label": "VlAtacadoInicial",
      "name": "VlAtacadoInicial",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "VlAtacadoFinal",
      "label": "VlAtacadoFinal",
      "name": "VlAtacadoFinal",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "VlAtacadoDecimais",
      "label": "VlAtacadoDecimais",
      "name": "VlAtacadoDecimais",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "VlVarejoInicial",
      "label": "VlVarejoInicial",
      "name": "VlVarejoInicial",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "VlVarejoFinal",
      "label": "VlVarejoFinal",
      "name": "VlVarejoFinal",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "VlVarejoDecimais",
      "label": "VlVarejoDecimais",
      "name": "VlVarejoDecimais",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "DescricaoContInicial",
      "label": "DescricaoContInicial",
      "name": "DescricaoContInicial",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "DescricaoContFinal",
      "label": "DescricaoContFinal",
      "name": "DescricaoContFinal",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "CompDescricaoInicial",
      "label": "CompDescricaoInicial",
      "name": "CompDescricaoInicial",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "CompDescricaoFinal",
      "label": "CompDescricaoFinal",
      "name": "CompDescricaoFinal",
      "type": "float",
      "size": 8,
      "scale": 4
    }
  ]
}
