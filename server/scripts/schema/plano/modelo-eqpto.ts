import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ModeloEqpto extends ModelBase {
  static tableName = "ModeloEqpto";
  static idColumn = ["CdModeloEqpto"];

  CdModeloEqpto!: number;
  NmModeloEqpto!: string;
  

  static getFields() {
    return [
      "CdModeloEqpto",
      "NmModeloEqpto",
      ];
  }
}

ModeloEqpto.knex(connections.plano);

export type TModeloEqpto = ModelObject<ModeloEqpto>;
