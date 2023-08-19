import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class AcumuladoresParciais extends ModelBase {
  static tableName = "AcumuladoresParciais";
  static idColumn = [];

  CdAcumuladorParcial!: number;
  Descricao!: string;
  

  static getFields() {
    return [
      "CdAcumuladorParcial",
      "Descricao",
      ];
  }
}

AcumuladoresParciais.knex(connections.plano);

export type TAcumuladoresParciais = ModelObject<AcumuladoresParciais>;
