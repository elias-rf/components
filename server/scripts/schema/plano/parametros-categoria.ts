import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ParametrosCategoria extends ModelBase {
  static tableName = "ParametrosCategoria";
  static idColumn = [];

  CdCategoria!: string;
  CdFilial!: number;
  PercRedCusto!: number;
  PercLucroVarejo!: number;
  PercLucroAtacado!: number;
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
      "CdCategoria",
      "CdFilial",
      "PercRedCusto",
      "PercLucroVarejo",
      "PercLucroAtacado",
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

ParametrosCategoria.knex(connections.plano);

export type TParametrosCategoria = ModelObject<ParametrosCategoria>;
