import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ProducaoCorrecao extends ModelBase {
  static tableName = "ProducaoCorrecao";
  static idColumn = ["CdCorrecao"];

  CdCorrecao!: number;
  Descricao!: string;
  FgAtivo!: string;
  

  static getFields() {
    return [
      "CdCorrecao",
      "Descricao",
      "FgAtivo",
      ];
  }
}

ProducaoCorrecao.knex(connections.plano);

export type TProducaoCorrecao = ModelObject<ProducaoCorrecao>;
