import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ProducaoEsterilizacaoMestre extends ModelBase {
  static tableName = "ProducaoEsterilizacaoMestre";
  static idColumn = [];

  CdFilial!: number;
  NumLoteEsterilizacao!: number;
  TipoEsterilizacao!: string;
  DtEnvio!: Date;
  DtRetorno!: Date;
  Quantidade!: number;
  Caixas!: number;
  Resultado!: string;
  FgSituacao!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "NumLoteEsterilizacao",
      "TipoEsterilizacao",
      "DtEnvio",
      "DtRetorno",
      "Quantidade",
      "Caixas",
      "Resultado",
      "FgSituacao",
      ];
  }
}

ProducaoEsterilizacaoMestre.knex(connections.plano);

export type TProducaoEsterilizacaoMestre = ModelObject<ProducaoEsterilizacaoMestre>;
