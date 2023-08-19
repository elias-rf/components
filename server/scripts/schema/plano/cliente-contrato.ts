import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ClienteContrato extends ModelBase {
  static tableName = "ClienteContrato";
  static idColumn = ["CdCliente"];

  CdCliente!: number;
  DtEnvioTermo!: Date;
  DtRecebimentoTermo!: Date;
  DtEnvioContrato!: Date;
  DtRecebimentoContrato!: Date;
  

  static getFields() {
    return [
      "CdCliente",
      "DtEnvioTermo",
      "DtRecebimentoTermo",
      "DtEnvioContrato",
      "DtRecebimentoContrato",
      ];
  }
}

ClienteContrato.knex(connections.plano);

export type TClienteContrato = ModelObject<ClienteContrato>;
