import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ProtocoloHist extends ModelBase {
  static tableName = "ProtocoloHist";
  static idColumn = ["CdProtocoloHist"];

  CdProtocoloHist!: number;
  CdProtocolo!: number;
  Historico!: string;
  

  static getFields() {
    return [
      "CdProtocoloHist",
      "CdProtocolo",
      "Historico",
      ];
  }
}

ProtocoloHist.knex(connections.plano);

export type TProtocoloHist = ModelObject<ProtocoloHist>;
