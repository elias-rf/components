import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class CidadesIbge extends ModelBase {
  static tableName = "CidadesIBGE";
  static idColumn = [];

  CdUFIBGE!: number;
  CdCidadeIBGE!: string;
  NmCidadeIBGE!: string;
  

  static getFields() {
    return [
      "CdUFIBGE",
      "CdCidadeIBGE",
      "NmCidadeIBGE",
      ];
  }
}

CidadesIbge.knex(connections.plano);

export type TCidadesIbge = ModelObject<CidadesIbge>;
