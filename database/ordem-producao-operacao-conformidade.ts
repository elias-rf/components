import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class OrdemProducaoOperacaoConformidade extends ModelBase {
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

OrdemProducaoOperacaoConformidade.knex(connections.oftalmo);

export type TOrdemProducaoOperacaoConformidade =
  ModelObject<OrdemProducaoOperacaoConformidade>;
