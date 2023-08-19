import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TempoProducao extends ModelBase {
  static tableName = "TempoProducao";
  static idColumn = ["NumItens"];

  NumItens!: number;
  NumCapsulas!: number;
  TempoLaboratorio!: number;
  TempoTelemarketing!: number;
  TempoBalcao!: number;
  TempoControleQualidade!: number;
  DtUltAlteracao!: Date;
  

  static getFields() {
    return [
      "NumItens",
      "NumCapsulas",
      "TempoLaboratorio",
      "TempoTelemarketing",
      "TempoBalcao",
      "TempoControleQualidade",
      "DtUltAlteracao",
      ];
  }
}

TempoProducao.knex(connections.plano);

export type TTempoProducao = ModelObject<TempoProducao>;
