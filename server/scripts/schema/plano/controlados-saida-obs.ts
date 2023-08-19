import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ControladosSaidaObs extends ModelBase {
  static tableName = "ControladosSaidaObs";
  static idColumn = [];

  CdFilial!: number;
  NumPDV!: number;
  NumDocumento!: number;
  Serie!: string;
  Modelo!: string;
  CdProduto!: string;
  Sequencia!: number;
  Observacao!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "NumPDV",
      "NumDocumento",
      "Serie",
      "Modelo",
      "CdProduto",
      "Sequencia",
      "Observacao",
      ];
  }
}

ControladosSaidaObs.knex(connections.plano);

export type TControladosSaidaObs = ModelObject<ControladosSaidaObs>;
