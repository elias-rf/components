import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TNaoConformidadeOperacaoProducaoOld extends ModelBase {
  static tableName = "tNaoConformidadeOperacaoProducaoOld";
  static idColumn = ["kNaoConformidadeOP"];

  kNaoConformidadeOP!: number;
  fkOperacaoOP!: number;
  Quantidade!: number;
  fkNaoConformidade!: number;
  fkCorrecao!: number;
  

  static getFields() {
    return [
      "kNaoConformidadeOP",
      "fkOperacaoOP",
      "Quantidade",
      "fkNaoConformidade",
      "fkCorrecao",
      ];
  }
}

TNaoConformidadeOperacaoProducaoOld.knex(connections.oftalmo);

export type TTNaoConformidadeOperacaoProducaoOld = ModelObject<TNaoConformidadeOperacaoProducaoOld>;
