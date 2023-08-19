import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class FilialConversaoCst extends ModelBase {
  static tableName = "FilialConversaoCST";
  static idColumn = [];

  Tipo!: string;
  CdFilialOrigem!: number;
  CdFilialDestino!: number;
  CSTOrigem!: number;
  CSTDestino!: number;
  

  static getFields() {
    return [
      "Tipo",
      "CdFilialOrigem",
      "CdFilialDestino",
      "CSTOrigem",
      "CSTDestino",
      ];
  }
}

FilialConversaoCst.knex(connections.plano);

export type TFilialConversaoCst = ModelObject<FilialConversaoCst>;
