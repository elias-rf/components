import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class AbcSaida extends ModelBase {
  static tableName = "AbcSaida";
  static idColumn = [];

  CdFilial!: number;
  CdProduto!: string;
  Descricao!: string;
  Quantidade!: number;
  Valor!: number;
  

  static getFields() {
    return [
      "CdFilial",
      "CdProduto",
      "Descricao",
      "Quantidade",
      "Valor",
      ];
  }
}

AbcSaida.knex(connections.plano);

export type TAbcSaida = ModelObject<AbcSaida>;
