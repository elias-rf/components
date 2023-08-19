import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class MsgConflitos extends ModelBase {
  static tableName = "MsgConflitos";
  static idColumn = [];

  CdFilial!: number;
  NumPedido!: number;
  Sequencia!: number;
  CdUsuario!: string;
  Data!: Date;
  CdSalOrigem!: number;
  CdSalDestino!: number;
  FgTipoMensagem!: string;
  Observacao!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "NumPedido",
      "Sequencia",
      "CdUsuario",
      "Data",
      "CdSalOrigem",
      "CdSalDestino",
      "FgTipoMensagem",
      "Observacao",
      ];
  }
}

MsgConflitos.knex(connections.plano);

export type TMsgConflitos = ModelObject<MsgConflitos>;
