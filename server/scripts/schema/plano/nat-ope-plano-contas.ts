import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class NatOpePlanoContas extends ModelBase {
  static tableName = "NatOpePlanoContas";
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

NatOpePlanoContas.knex(connections.plano);

export type TNatOpePlanoContas = ModelObject<NatOpePlanoContas>;
