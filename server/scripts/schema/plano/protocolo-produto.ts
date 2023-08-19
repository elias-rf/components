import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ProtocoloProduto extends ModelBase {
  static tableName = "ProtocoloProduto";
  static idColumn = [];

  CdProtocolo!: number;
  CdProduto!: string;
  QtdeProduto!: number;
  FgEnviaRetornar!: string;
  

  static getFields() {
    return [
      "CdProtocolo",
      "CdProduto",
      "QtdeProduto",
      "FgEnviaRetornar",
      ];
  }
}

ProtocoloProduto.knex(connections.plano);

export type TProtocoloProduto = ModelObject<ProtocoloProduto>;
