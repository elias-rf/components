import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Controle16 extends ModelBase {
  static tableName = "Controle16";
  static idColumn = [];

  NumSerie!: string;
  DtBase!: Date;
  TipoPagamento!: string;
  TipoDoc!: string;
  VlPagamento!: number;
  ControleTipoDoc!: string;
  ControleVlPagamento!: number;
  

  static getFields() {
    return [
      "NumSerie",
      "DtBase",
      "TipoPagamento",
      "TipoDoc",
      "VlPagamento",
      "ControleTipoDoc",
      "ControleVlPagamento",
      ];
  }
}

Controle16.knex(connections.plano);

export type TControle16 = ModelObject<Controle16>;
