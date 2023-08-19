import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class SaisConflitantes extends ModelBase {
  static tableName = "SaisConflitantes";
  static idColumn = [];

  CdSalOrigem!: string;
  CdSalDestino!: string;
  FgTipoAdvertencia!: string;
  DtUltAlteracao!: Date;
  Observacao!: string;
  

  static getFields() {
    return [
      "CdSalOrigem",
      "CdSalDestino",
      "FgTipoAdvertencia",
      "DtUltAlteracao",
      "Observacao",
      ];
  }
}

SaisConflitantes.knex(connections.plano);

export type TSaisConflitantes = ModelObject<SaisConflitantes>;
