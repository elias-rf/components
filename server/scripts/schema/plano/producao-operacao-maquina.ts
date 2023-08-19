import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ProducaoOperacaoMaquina extends ModelBase {
  static tableName = "ProducaoOperacaoMaquina";
  static idColumn = [];

  CdOperacao!: number;
  CdMaquina!: string;
  

  static getFields() {
    return [
      "CdOperacao",
      "CdMaquina",
      ];
  }
}

ProducaoOperacaoMaquina.knex(connections.plano);

export type TProducaoOperacaoMaquina = ModelObject<ProducaoOperacaoMaquina>;
