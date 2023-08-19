import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class MestreNotaTerceiros extends ModelBase {
  static tableName = "MestreNotaTerceiros";
  static idColumn = [];

  CdEmpresa!: number;
  CdFilial!: number;
  NumNota!: number;
  Serie!: string;
  Modelo!: string;
  CdFornecedorNotaReferencia!: number;
  

  static getFields() {
    return [
      "CdEmpresa",
      "CdFilial",
      "NumNota",
      "Serie",
      "Modelo",
      "CdFornecedorNotaReferencia",
      ];
  }
}

MestreNotaTerceiros.knex(connections.plano);

export type TMestreNotaTerceiros = ModelObject<MestreNotaTerceiros>;
