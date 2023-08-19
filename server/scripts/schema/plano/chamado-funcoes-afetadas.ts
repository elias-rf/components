import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ChamadoFuncoesAfetadas extends ModelBase {
  static tableName = "ChamadoFuncoesAfetadas";
  static idColumn = [];

  CdEmpresa!: number;
  CdFilial!: number;
  NumeroRat!: number;
  Funcao!: string;
  Descricao!: string;
  Observacao!: string;
  

  static getFields() {
    return [
      "CdEmpresa",
      "CdFilial",
      "NumeroRat",
      "Funcao",
      "Descricao",
      "Observacao",
      ];
  }
}

ChamadoFuncoesAfetadas.knex(connections.plano);

export type TChamadoFuncoesAfetadas = ModelObject<ChamadoFuncoesAfetadas>;
