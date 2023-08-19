import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ContratoItemObservacao extends ModelBase {
  static tableName = "ContratoItemObservacao";
  static idColumn = [];

  CdEmpresa!: number;
  CdFilial!: number;
  CdCliente!: number;
  DiaContrato!: number;
  Sequencia!: number;
  Observacao!: string;
  

  static getFields() {
    return [
      "CdEmpresa",
      "CdFilial",
      "CdCliente",
      "DiaContrato",
      "Sequencia",
      "Observacao",
      ];
  }
}

ContratoItemObservacao.knex(connections.plano);

export type TContratoItemObservacao = ModelObject<ContratoItemObservacao>;
