import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class EPharmaMensagens extends ModelBase {
  static tableName = "ePharmaMensagens";
  static idColumn = ["CdMensagem"];

  CdMensagem!: string;
  DescricaoMensagem!: string;
  

  static getFields() {
    return [
      "CdMensagem",
      "DescricaoMensagem",
      ];
  }
}

EPharmaMensagens.knex(connections.plano);

export type TEPharmaMensagens = ModelObject<EPharmaMensagens>;
