import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class HistoricoFormulacao extends ModelBase {
  static tableName = "HistoricoFormulacao";
  static idColumn = [];

  CdFilial!: number;
  NumFormula!: number;
  Sequencia!: number;
  CdUsuario!: string;
  TipoOcorrencia!: string;
  Data!: Date;
  Historico!: string;
  Observacao!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "NumFormula",
      "Sequencia",
      "CdUsuario",
      "TipoOcorrencia",
      "Data",
      "Historico",
      "Observacao",
      ];
  }
}

HistoricoFormulacao.knex(connections.plano);

export type THistoricoFormulacao = ModelObject<HistoricoFormulacao>;
