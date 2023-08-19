import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class CadCliTeste extends ModelBase {
  static tableName = "CadCliTeste";
  static idColumn = ["CdCliente"];

  CdCliente!: number;
  Texto!: string;
  

  static getFields() {
    return [
      "CdCliente",
      "Texto",
      ];
  }
}

CadCliTeste.knex(connections.plano);

export type TCadCliTeste = ModelObject<CadCliTeste>;
