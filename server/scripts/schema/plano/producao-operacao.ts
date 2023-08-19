import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ProducaoOperacao extends ModelBase {
  static tableName = "ProducaoOperacao";
  static idColumn = ["CdOperacao"];

  CdOperacao!: number;
  Descricao!: string;
  FgAtivo!: string;
  

  static getFields() {
    return [
      "CdOperacao",
      "Descricao",
      "FgAtivo",
      ];
  }
}

ProducaoOperacao.knex(connections.plano);

export type TProducaoOperacao = ModelObject<ProducaoOperacao>;
