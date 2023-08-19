import { connections } from "@/config/connections";
import { ModelBase } from "@/database/utils/model-base";
import { ModelObject } from "objection";

export class NfEntradaLog extends ModelBase {
  static tableName = "NfLogConferencia";
  static idColumn = ["CdFilial", "NumNota", "Serie"];

  CdFilial!: number;
  NumNota!: number;
  Serie!: string;
  CdFornecedor!: number;
  Data!: Date;
  Usuario!: string;
  Operacao!: string;
  Modelo!: string;

  static getFields() {
    return [
      "CdFilial",
      "NumNota",
      "Serie",
      "CdFornecedor",
      "Data",
      "Usuario",
      "Operacao",
      "Modelo",
    ];
  }
}

NfEntradaLog.knex(connections.plano);

export type TNfEntradaLog = ModelObject<NfEntradaLog>;
