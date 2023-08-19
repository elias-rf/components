import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class FasesProducao extends ModelBase {
  static tableName = "FasesProducao";
  static idColumn = [];

  CdFase!: number;
  Descricao!: string;
  

  static getFields() {
    return [
      "CdFase",
      "Descricao",
      ];
  }
}

FasesProducao.knex(connections.plano);

export type TFasesProducao = ModelObject<FasesProducao>;
