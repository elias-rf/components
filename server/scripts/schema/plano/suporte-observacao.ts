import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class SuporteObservacao extends ModelBase {
  static tableName = "SuporteObservacao";
  static idColumn = ["Usuario"];

  Usuario!: string;
  Observacao!: string;
  

  static getFields() {
    return [
      "Usuario",
      "Observacao",
      ];
  }
}

SuporteObservacao.knex(connections.plano);

export type TSuporteObservacao = ModelObject<SuporteObservacao>;
