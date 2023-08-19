import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ProducaoEsterilizacaoMestreObs extends ModelBase {
  static tableName = "ProducaoEsterilizacaoMestreObs";
  static idColumn = [];

  CdFilial!: number;
  TipoEsterilizacao!: string;
  NumLoteEsterilizacao!: number;
  Observacao!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "TipoEsterilizacao",
      "NumLoteEsterilizacao",
      "Observacao",
      ];
  }
}

ProducaoEsterilizacaoMestreObs.knex(connections.plano);

export type TProducaoEsterilizacaoMestreObs = ModelObject<ProducaoEsterilizacaoMestreObs>;
