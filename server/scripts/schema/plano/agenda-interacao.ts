import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class AgendaInteracao extends ModelBase {
  static tableName = "AgendaInteracao";
  static idColumn = [];

  IdCompromisso!: number;
  Sequencia!: number;
  DtInteracaoPrevista!: Date;
  DescricaoInteracaoPrevista!: string;
  UsuarioInteracaoPrevista!: string;
  TipoInteracaoPrevista!: string;
  DtInteracaoRealizada!: Date;
  DescricaoInteracaoRealizada!: string;
  UsuarioInteracaoRealizada!: string;
  TipoInteracaoRealizada!: string;
  

  static getFields() {
    return [
      "IdCompromisso",
      "Sequencia",
      "DtInteracaoPrevista",
      "DescricaoInteracaoPrevista",
      "UsuarioInteracaoPrevista",
      "TipoInteracaoPrevista",
      "DtInteracaoRealizada",
      "DescricaoInteracaoRealizada",
      "UsuarioInteracaoRealizada",
      "TipoInteracaoRealizada",
      ];
  }
}

AgendaInteracao.knex(connections.plano);

export type TAgendaInteracao = ModelObject<AgendaInteracao>;
