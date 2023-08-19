import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class CorCapsula extends ModelBase {
  static tableName = "CorCapsula";
  static idColumn = ["CdCorCapsula"];

  CdCorCapsula!: number;
  NmCorCapsula!: string;
  

  static getFields() {
    return [
      "CdCorCapsula",
      "NmCorCapsula",
      ];
  }
}

CorCapsula.knex(connections.plano);

export type TCorCapsula = ModelObject<CorCapsula>;
