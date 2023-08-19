import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ContCliSuporte extends ModelBase {
  static tableName = "ContCliSuporte";
  static idColumn = [];

  CdCliente!: number;
  NumSequencia!: number;
  UsuarioSite!: string;
  SenhaSite!: string;
  

  static getFields() {
    return [
      "CdCliente",
      "NumSequencia",
      "UsuarioSite",
      "SenhaSite",
      ];
  }
}

ContCliSuporte.knex(connections.plano);

export type TContCliSuporte = ModelObject<ContCliSuporte>;
