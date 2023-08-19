import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ParametrosCustoProduto extends ModelBase {
  static tableName = "ParametrosCustoProduto";
  static idColumn = [];

  CdProduto!: string;
  CdFilial!: number;
  PercLucroVarejo!: number;
  PercLucroAtacado!: number;
  PercRedCusto!: number;
  PercDesconto1!: number;
  PercDesconto2!: number;
  PercDesconto3!: number;
  PercDesconto4!: number;
  PercDesconto5!: number;
  PercIPIFabricante!: number;
  PercCustoFinanceiro!: number;
  PercDiferencaICMS!: number;
  PercPisCofins!: number;
  PercCustoEmbalagem!: number;
  PercAcrescimoDiversos!: number;
  VlCustoFrete!: number;
  DtUltAlteracao!: Date;
  

  static getFields() {
    return [
      "CdProduto",
      "CdFilial",
      "PercLucroVarejo",
      "PercLucroAtacado",
      "PercRedCusto",
      "PercDesconto1",
      "PercDesconto2",
      "PercDesconto3",
      "PercDesconto4",
      "PercDesconto5",
      "PercIPIFabricante",
      "PercCustoFinanceiro",
      "PercDiferencaICMS",
      "PercPisCofins",
      "PercCustoEmbalagem",
      "PercAcrescimoDiversos",
      "VlCustoFrete",
      "DtUltAlteracao",
      ];
  }
}

ParametrosCustoProduto.knex(connections.plano);

export type TParametrosCustoProduto = ModelObject<ParametrosCustoProduto>;
