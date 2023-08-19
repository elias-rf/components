import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ObsItemMapaEntrega extends ModelBase {
  static tableName = "ObsItemMapaEntrega";
  static idColumn = [];

  CdFilial!: number;
  NumMapa!: number;
  NumDoc!: number;
  Serie!: string;
  Tipo!: string;
  Observacao!: string;
  Modelo!: string;
  SiglaDoc!: string;
  ItemDoc!: number;
  

  static getFields() {
    return [
      "CdFilial",
      "NumMapa",
      "NumDoc",
      "Serie",
      "Tipo",
      "Observacao",
      "Modelo",
      "SiglaDoc",
      "ItemDoc",
      ];
  }
}

ObsItemMapaEntrega.knex(connections.plano);

export type TObsItemMapaEntrega = ModelObject<ObsItemMapaEntrega>;
