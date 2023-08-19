import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ContratosLimiteEmi extends ModelBase {
  static tableName = "ContratosLimiteEmi";
  static idColumn = [];

  CdCliente!: number;
  DiaContr!: number;
  DataLimite!: Date;
  

  static getFields() {
    return [
      "CdCliente",
      "DiaContr",
      "DataLimite",
      ];
  }
}

ContratosLimiteEmi.knex(connections.plano);

export type TContratosLimiteEmi = ModelObject<ContratosLimiteEmi>;
