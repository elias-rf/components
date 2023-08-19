import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ProgramaObservacao extends ModelBase {
  static tableName = "ProgramaObservacao";
  static idColumn = ["CdPrograma"];

  CdPrograma!: number;
  Observacao!: string;
  

  static getFields() {
    return [
      "CdPrograma",
      "Observacao",
      ];
  }
}

ProgramaObservacao.knex(connections.plano);

export type TProgramaObservacao = ModelObject<ProgramaObservacao>;
