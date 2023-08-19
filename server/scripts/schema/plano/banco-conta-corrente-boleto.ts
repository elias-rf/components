import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class BancoContaCorrenteBoleto extends ModelBase {
  static tableName = "BancoContaCorrenteBoleto";
  static idColumn = [];

  NumBanco!: number;
  NumAgencia!: number;
  NumContaCorrente!: string;
  Especie!: string;
  Aceite!: string;
  Moeda!: string;
  LocalPagamento!: string;
  NumCarteira!: number;
  SeqNossoNumero!: number;
  

  static getFields() {
    return [
      "NumBanco",
      "NumAgencia",
      "NumContaCorrente",
      "Especie",
      "Aceite",
      "Moeda",
      "LocalPagamento",
      "NumCarteira",
      "SeqNossoNumero",
      ];
  }
}

BancoContaCorrenteBoleto.knex(connections.plano);

export type TBancoContaCorrenteBoleto = ModelObject<BancoContaCorrenteBoleto>;
