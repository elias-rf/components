import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class EcfIdentificacao extends ModelBase {
  static tableName = "ECFIdentificacao";
  static idColumn = [];

  CNPJFilial!: number;
  NumECF!: number;
  NumFabricacao!: string;
  ControleFilial!: number;
  ControleFab!: string;
  

  static getFields() {
    return [
      "CNPJFilial",
      "NumECF",
      "NumFabricacao",
      "ControleFilial",
      "ControleFab",
      ];
  }
}

EcfIdentificacao.knex(connections.plano);

export type TEcfIdentificacao = ModelObject<EcfIdentificacao>;
