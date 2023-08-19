import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class VidaLinkConvenios extends ModelBase {
  static tableName = "VidaLinkConvenios";
  static idColumn = ["IdConvenio"];

  IdConvenio!: string;
  Descricao!: string;
  

  static getFields() {
    return [
      "IdConvenio",
      "Descricao",
      ];
  }
}

VidaLinkConvenios.knex(connections.plano);

export type TVidaLinkConvenios = ModelObject<VidaLinkConvenios>;
