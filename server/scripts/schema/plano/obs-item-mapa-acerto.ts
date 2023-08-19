import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ObsItemMapaAcerto extends ModelBase {
  static tableName = "ObsItemMapaAcerto";
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

ObsItemMapaAcerto.knex(connections.plano);

export type TObsItemMapaAcerto = ModelObject<ObsItemMapaAcerto>;
