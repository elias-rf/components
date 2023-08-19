import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ProducaoFormulaNaoConforme extends ModelBase {
  static tableName = "ProducaoFormulaNaoConforme";
  static idColumn = [];

  CdFilial!: number;
  NumFormula!: number;
  CdOperacao!: number;
  QuantidadeNaoConforme!: number;
  CdNaoConformidade!: number;
  CdCorrecao!: number;
  Sequencia!: number;
  

  static getFields() {
    return [
      "CdFilial",
      "NumFormula",
      "CdOperacao",
      "QuantidadeNaoConforme",
      "CdNaoConformidade",
      "CdCorrecao",
      "Sequencia",
      ];
  }
}

ProducaoFormulaNaoConforme.knex(connections.plano);

export type TProducaoFormulaNaoConforme = ModelObject<ProducaoFormulaNaoConforme>;
