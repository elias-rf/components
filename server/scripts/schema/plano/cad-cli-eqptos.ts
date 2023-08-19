import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class CadCliEqptos extends ModelBase {
  static tableName = "CadCliEqptos";
  static idColumn = [];

  CdCliente!: number;
  CdMarcaEqpto!: number;
  CdModeloEqpto!: number;
  NumSerie!: string;
  

  static getFields() {
    return [
      "CdCliente",
      "CdMarcaEqpto",
      "CdModeloEqpto",
      "NumSerie",
      ];
  }
}

CadCliEqptos.knex(connections.plano);

export type TCadCliEqptos = ModelObject<CadCliEqptos>;
