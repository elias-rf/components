import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class SaldoBancoHoras extends ModelBase {
  static tableName = "SaldoBancoHoras";
  static idColumn = ["CdUsuario"];

  CdUsuario!: string;
  DtUltAcertoBancoHoras!: Date;
  QtdeHorasSaldo!: number;
  

  static getFields() {
    return [
      "CdUsuario",
      "DtUltAcertoBancoHoras",
      "QtdeHorasSaldo",
      ];
  }
}

SaldoBancoHoras.knex(connections.plano);

export type TSaldoBancoHoras = ModelObject<SaldoBancoHoras>;
