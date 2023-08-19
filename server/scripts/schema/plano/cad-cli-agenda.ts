import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class CadCliAgenda extends ModelBase {
  static tableName = "CadCliAgenda";
  static idColumn = ["CdCliente"];

  CdCliente!: number;
  FgTeleAtivo!: string;
  DtultContato!: Date;
  

  static getFields() {
    return [
      "CdCliente",
      "FgTeleAtivo",
      "DtultContato",
      ];
  }
}

CadCliAgenda.knex(connections.plano);

export type TCadCliAgenda = ModelObject<CadCliAgenda>;
