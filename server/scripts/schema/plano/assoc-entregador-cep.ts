import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class AssocEntregadorCep extends ModelBase {
  static tableName = "AssocEntregadorCEP";
  static idColumn = [];

  CdEmitente!: number;
  CEPInicial!: string;
  CEPFinal!: string;
  

  static getFields() {
    return [
      "CdEmitente",
      "CEPInicial",
      "CEPFinal",
      ];
  }
}

AssocEntregadorCep.knex(connections.plano);

export type TAssocEntregadorCep = ModelObject<AssocEntregadorCep>;
