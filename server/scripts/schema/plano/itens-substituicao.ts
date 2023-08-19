import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ItensSubstituicao extends ModelBase {
  static tableName = "ItensSubstituicao";
  static idColumn = [];

  CdFilial!: number;
  CdProduto!: string;
  Sequencia!: number;
  DtEntrada!: Date;
  NumNfEntrada!: number;
  SerieNfEntrada!: string;
  VlSubstituido!: number;
  VlIcmsSubstituido!: number;
  DtSaida!: Date;
  NumNfSaida!: number;
  SerieNfSaida!: string;
  CdFornecedor!: number;
  

  static getFields() {
    return [
      "CdFilial",
      "CdProduto",
      "Sequencia",
      "DtEntrada",
      "NumNfEntrada",
      "SerieNfEntrada",
      "VlSubstituido",
      "VlIcmsSubstituido",
      "DtSaida",
      "NumNfSaida",
      "SerieNfSaida",
      "CdFornecedor",
      ];
  }
}

ItensSubstituicao.knex(connections.plano);

export type TItensSubstituicao = ModelObject<ItensSubstituicao>;
