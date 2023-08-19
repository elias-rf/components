import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class NotaInformacaoComplementar extends ModelBase {
  static tableName = "NotaInformacaoComplementar";
  static idColumn = [];

  CdFilial!: number;
  NumNota!: number;
  Serie!: string;
  Modelo!: string;
  CdInformacaoComplementar!: number;
  

  static getFields() {
    return [
      "CdFilial",
      "NumNota",
      "Serie",
      "Modelo",
      "CdInformacaoComplementar",
      ];
  }
}

NotaInformacaoComplementar.knex(connections.plano);

export type TNotaInformacaoComplementar = ModelObject<NotaInformacaoComplementar>;
