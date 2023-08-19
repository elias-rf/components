import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class NatOpeNaoAutorizada extends ModelBase {
  static tableName = "NatOpeNaoAutorizada";
  static idColumn = [];

  CdEmpresa!: number;
  CdFilial!: number;
  Nop!: number;
  

  static getFields() {
    return [
      "CdEmpresa",
      "CdFilial",
      "Nop",
      ];
  }
}

NatOpeNaoAutorizada.knex(connections.plano);

export type TNatOpeNaoAutorizada = ModelObject<NatOpeNaoAutorizada>;
