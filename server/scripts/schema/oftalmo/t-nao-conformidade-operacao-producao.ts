import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TNaoConformidadeOperacaoProducao extends ModelBase {
  static tableName = "tNaoConformidadeOperacaoProducao";
  static idColumn = ["kNaoConformidadeOP"];

  kNaoConformidadeOP!: number;
  fkOperacaoOP!: number;
  Quantidade!: number;
  fkNaoConformidade!: number;
  fkCorrecao!: number;
  ts!: string;
  

  static getFields() {
    return [
      "kNaoConformidadeOP",
      "fkOperacaoOP",
      "Quantidade",
      "fkNaoConformidade",
      "fkCorrecao",
      "ts",
      ];
  }
}

TNaoConformidadeOperacaoProducao.knex(connections.oftalmo);

export type TTNaoConformidadeOperacaoProducao = ModelObject<TNaoConformidadeOperacaoProducao>;
