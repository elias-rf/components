import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class FilialMensagem extends ModelBase {
  static tableName = "FilialMensagem";
  static idColumn = [];

  CdEmpresa!: number;
  CdFilial!: number;
  TipoMensagem!: string;
  Mensagem!: string;
  

  static getFields() {
    return [
      "CdEmpresa",
      "CdFilial",
      "TipoMensagem",
      "Mensagem",
      ];
  }
}

FilialMensagem.knex(connections.plano);

export type TFilialMensagem = ModelObject<FilialMensagem>;
