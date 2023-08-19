import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class CadCliSuporte extends ModelBase {
  static tableName = "CadCliSuporte";
  static idColumn = ["CdCliente"];

  CdCliente!: number;
  UsuarioSite!: string;
  SenhaSite!: string;
  NmGestor!: string;
  EmailGestor!: string;
  

  static getFields() {
    return [
      "CdCliente",
      "UsuarioSite",
      "SenhaSite",
      "NmGestor",
      "EmailGestor",
      ];
  }
}

CadCliSuporte.knex(connections.plano);

export type TCadCliSuporte = ModelObject<CadCliSuporte>;
