import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ConfiguracaoImpProdutos extends ModelBase {
  static tableName = "ConfiguracaoImpProdutos";
  static idColumn = ["IdLayOut"];

  IdLayOut!: string;
  CdProdutoInicial!: number;
  CdProdutoFinal!: number;
  CdReferenciaInicial!: number;
  CdreferenciaFinal!: number;
  DescricaoInicial!: number;
  DescricaoFinal!: number;
  CdDepartamentoInicial!: number;
  CdDepartamentoFinal!: number;
  CdDepartamentoPadrao!: number;
  CdCategoriaInicial!: number;
  CdCategoriaFinal!: number;
  CdCategoriaPadrao!: string;
  CdFornecedorInicial!: number;
  CdFornecedorFinal!: number;
  CdFornecedorPadrao!: number;
  CdFabricanteInicial!: number;
  CdFabricanteFinal!: number;
  CdFabricantePadrao!: number;
  UnidadeInicial!: number;
  UnidadeFinal!: number;
  UnidadePadrao!: string;
  VlTabelaInicial!: number;
  VlTabelaFinal!: number;
  VlTabelaDecimais!: number;
  VlCustoInicial!: number;
  VlCustoFinal!: number;
  VlCustoDecimais!: number;
  VlAtacadoInicial!: number;
  VlAtacadoFinal!: number;
  VlAtacadoDecimais!: number;
  VlVarejoInicial!: number;
  VlVarejoFinal!: number;
  VlVarejoDecimais!: number;
  DescricaoContInicial!: number;
  DescricaoContFinal!: number;
  CompDescricaoInicial!: number;
  CompDescricaoFinal!: number;
  

  static getFields() {
    return [
      "IdLayOut",
      "CdProdutoInicial",
      "CdProdutoFinal",
      "CdReferenciaInicial",
      "CdreferenciaFinal",
      "DescricaoInicial",
      "DescricaoFinal",
      "CdDepartamentoInicial",
      "CdDepartamentoFinal",
      "CdDepartamentoPadrao",
      "CdCategoriaInicial",
      "CdCategoriaFinal",
      "CdCategoriaPadrao",
      "CdFornecedorInicial",
      "CdFornecedorFinal",
      "CdFornecedorPadrao",
      "CdFabricanteInicial",
      "CdFabricanteFinal",
      "CdFabricantePadrao",
      "UnidadeInicial",
      "UnidadeFinal",
      "UnidadePadrao",
      "VlTabelaInicial",
      "VlTabelaFinal",
      "VlTabelaDecimais",
      "VlCustoInicial",
      "VlCustoFinal",
      "VlCustoDecimais",
      "VlAtacadoInicial",
      "VlAtacadoFinal",
      "VlAtacadoDecimais",
      "VlVarejoInicial",
      "VlVarejoFinal",
      "VlVarejoDecimais",
      "DescricaoContInicial",
      "DescricaoContFinal",
      "CompDescricaoInicial",
      "CompDescricaoFinal",
      ];
  }
}

ConfiguracaoImpProdutos.knex(connections.plano);

export type TConfiguracaoImpProdutos = ModelObject<ConfiguracaoImpProdutos>;
