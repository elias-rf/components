import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class NatOpePlanoContasNota extends ModelBase {
  static tableName = "NatOpePlanoContasNota";
  static idColumn = [];

  Nop!: number;
  CdDepartamento!: number;
  NumConta!: number;
  

  static getFields() {
    return [
      "Nop",
      "CdDepartamento",
      "NumConta",
      ];
  }
}

NatOpePlanoContasNota.knex(connections.plano);

export type TNatOpePlanoContasNota = ModelObject<NatOpePlanoContasNota>;
