import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ClienteDmsNestle extends ModelBase {
  static tableName = "ClienteDMSNestle";
  static idColumn = [];

  CdEmpresa!: number;
  CdFilial!: number;
  CdCliente!: number;
  DtInclusao!: Date;
  

  static getFields() {
    return [
      "CdEmpresa",
      "CdFilial",
      "CdCliente",
      "DtInclusao",
      ];
  }
}

ClienteDmsNestle.knex(connections.plano);

export type TClienteDmsNestle = ModelObject<ClienteDmsNestle>;
