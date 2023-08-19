import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class CidadesErf extends ModelBase {
  static tableName = "cidadesERF";
  static idColumn = [];

  CdUFIBGE!: number;
  CdCidadeIBGE!: string;
  NmCidadeIBGE!: string;
  uf!: string;
  ufOld!: string;
  

  static getFields() {
    return [
      "CdUFIBGE",
      "CdCidadeIBGE",
      "NmCidadeIBGE",
      "uf",
      "ufOld",
      ];
  }
}

CidadesErf.knex(connections.plano);

export type TCidadesErf = ModelObject<CidadesErf>;
