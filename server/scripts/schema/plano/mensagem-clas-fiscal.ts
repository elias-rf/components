import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class MensagemClasFiscal extends ModelBase {
  static tableName = "MensagemClasFiscal";
  static idColumn = ["ClasFiscal"];

  ClasFiscal!: string;
  Mensagem!: string;
  

  static getFields() {
    return [
      "ClasFiscal",
      "Mensagem",
      ];
  }
}

MensagemClasFiscal.knex(connections.plano);

export type TMensagemClasFiscal = ModelObject<MensagemClasFiscal>;
