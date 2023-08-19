import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class MensagemPadraoEmailCr extends ModelBase {
  static tableName = "MensagemPadraoEmailCR";
  static idColumn = ["CdFilial"];

  CdFilial!: number;
  MSG!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "MSG",
      ];
  }
}

MensagemPadraoEmailCr.knex(connections.plano);

export type TMensagemPadraoEmailCr = ModelObject<MensagemPadraoEmailCr>;
