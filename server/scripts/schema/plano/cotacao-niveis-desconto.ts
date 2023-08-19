import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class CotacaoNiveisDesconto extends ModelBase {
  static tableName = "CotacaoNiveisDesconto";
  static idColumn = [];

  CdFornecedor!: number;
  CdFabricante!: number;
  Nivel1!: number;
  Nivel2!: number;
  Nivel3!: number;
  

  static getFields() {
    return [
      "CdFornecedor",
      "CdFabricante",
      "Nivel1",
      "Nivel2",
      "Nivel3",
      ];
  }
}

CotacaoNiveisDesconto.knex(connections.plano);

export type TCotacaoNiveisDesconto = ModelObject<CotacaoNiveisDesconto>;
