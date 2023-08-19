import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Estorno extends ModelBase {
  static tableName = "Estorno";
  static idColumn = [];

  CdFilial!: number;
  NumNota!: number;
  Serie!: string;
  Quantidade!: number;
  DtBase!: Date;
  VlBase!: number;
  

  static getFields() {
    return [
      "CdFilial",
      "NumNota",
      "Serie",
      "Quantidade",
      "DtBase",
      "VlBase",
      ];
  }
}

Estorno.knex(connections.plano);

export type TEstorno = ModelObject<Estorno>;
