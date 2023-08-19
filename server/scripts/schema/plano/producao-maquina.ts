import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ProducaoMaquina extends ModelBase {
  static tableName = "ProducaoMaquina";
  static idColumn = ["CdMaquina"];

  CdMaquina!: string;
  Descricao!: string;
  FgAtivo!: string;
  

  static getFields() {
    return [
      "CdMaquina",
      "Descricao",
      "FgAtivo",
      ];
  }
}

ProducaoMaquina.knex(connections.plano);

export type TProducaoMaquina = ModelObject<ProducaoMaquina>;
