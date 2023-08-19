import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ObsItemNota extends ModelBase {
  static tableName = "ObsItemNota";
  static idColumn = [];

  CdFilial!: number;
  NumNota!: number;
  Serie!: string;
  CdProduto!: string;
  Sequencia!: number;
  Observacao!: string;
  Modelo!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "NumNota",
      "Serie",
      "CdProduto",
      "Sequencia",
      "Observacao",
      "Modelo",
      ];
  }
}

ObsItemNota.knex(connections.plano);

export type TObsItemNota = ModelObject<ObsItemNota>;
