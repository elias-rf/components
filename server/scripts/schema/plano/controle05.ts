import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Controle05 extends ModelBase {
  static tableName = "Controle05";
  static idColumn = [];

  CNPJFilial!: number;
  NumECF!: number;
  DtBase!: Date;
  Totalizador!: string;
  Aliquota!: number;
  PosicaoTotalizador!: number;
  VlAcumulado!: number;
  NumSerie!: string;
  NumReducaoZ!: number;
  NumUsuario!: number;
  

  static getFields() {
    return [
      "CNPJFilial",
      "NumECF",
      "DtBase",
      "Totalizador",
      "Aliquota",
      "PosicaoTotalizador",
      "VlAcumulado",
      "NumSerie",
      "NumReducaoZ",
      "NumUsuario",
      ];
  }
}

Controle05.knex(connections.plano);

export type TControle05 = ModelObject<Controle05>;
