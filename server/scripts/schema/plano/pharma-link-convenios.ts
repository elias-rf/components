import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class PharmaLinkConvenios extends ModelBase {
  static tableName = "PharmaLinkConvenios";
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

PharmaLinkConvenios.knex(connections.plano);

export type TPharmaLinkConvenios = ModelObject<PharmaLinkConvenios>;
