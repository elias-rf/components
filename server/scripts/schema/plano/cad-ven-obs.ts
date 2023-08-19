import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class CadVenObs extends ModelBase {
  static tableName = "CadVenOBS";
  static idColumn = ["CdVendedor"];

  CdVendedor!: number;
  Observacao!: string;
  

  static getFields() {
    return [
      "CdVendedor",
      "Observacao",
      ];
  }
}

CadVenObs.knex(connections.plano);

export type TCadVenObs = ModelObject<CadVenObs>;
