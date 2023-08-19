import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class InfBancos extends ModelBase {
  static tableName = "InfBancos";
  static idColumn = [];

  Caminho!: string;
  DtUltAtualizacao!: Date;
  HrUltAtualizacao!: Date;
  

  static getFields() {
    return [
      "Caminho",
      "DtUltAtualizacao",
      "HrUltAtualizacao",
      ];
  }
}

InfBancos.knex(connections.plano);

export type TInfBancos = ModelObject<InfBancos>;
