import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class VidaLinkServidores extends ModelBase {
  static tableName = "VidaLinkServidores";
  static idColumn = ["IdMaquina"];

  IdMaquina!: string;
  NmServidor!: string;
  

  static getFields() {
    return [
      "IdMaquina",
      "NmServidor",
      ];
  }
}

VidaLinkServidores.knex(connections.plano);

export type TVidaLinkServidores = ModelObject<VidaLinkServidores>;
