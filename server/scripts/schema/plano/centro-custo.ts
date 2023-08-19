import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class CentroCusto extends ModelBase {
  static tableName = "CentroCusto";
  static idColumn = ["CdCentroCusto"];

  CdCentroCusto!: number;
  Descricao!: string;
  

  static getFields() {
    return [
      "CdCentroCusto",
      "Descricao",
      ];
  }
}

CentroCusto.knex(connections.plano);

export type TCentroCusto = ModelObject<CentroCusto>;
