import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class NfLogConferencia extends ModelBase {
  static tableName = "NfLogConferencia";
  static idColumn = [];

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

NfLogConferencia.knex(connections.plano);

export type TNfLogConferencia = ModelObject<NfLogConferencia>;
