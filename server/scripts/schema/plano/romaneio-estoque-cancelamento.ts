import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class RomaneioEstoqueCancelamento extends ModelBase {
  static tableName = "RomaneioEstoqueCancelamento";
  static idColumn = [];

  CdEmpresa!: number;
  CdFilial!: number;
  NumRomaneio!: number;
  Motivo!: string;
  DtCancelamento!: Date;
  UsuarioCancelamento!: string;
  

  static getFields() {
    return [
      "CdEmpresa",
      "CdFilial",
      "NumRomaneio",
      "Motivo",
      "DtCancelamento",
      "UsuarioCancelamento",
      ];
  }
}

RomaneioEstoqueCancelamento.knex(connections.plano);

export type TRomaneioEstoqueCancelamento = ModelObject<RomaneioEstoqueCancelamento>;
