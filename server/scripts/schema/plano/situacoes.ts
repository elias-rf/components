import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Situacoes extends ModelBase {
  static tableName = "Situacoes";
  static idColumn = ["CdSituacao"];

  CdSituacao!: number;
  NmSituacao!: string;
  AlteraSolucao!: string;
  ExigeDetalhes!: string;
  ExigeTecnico!: string;
  

  static getFields() {
    return [
      "CdSituacao",
      "NmSituacao",
      "AlteraSolucao",
      "ExigeDetalhes",
      "ExigeTecnico",
      ];
  }
}

Situacoes.knex(connections.plano);

export type TSituacoes = ModelObject<Situacoes>;
