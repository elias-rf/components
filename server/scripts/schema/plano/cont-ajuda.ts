import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ContAjuda extends ModelBase {
  static tableName = "ContAjuda";
  static idColumn = [];

  Funcao!: string;
  Usuario!: string;
  

  static getFields() {
    return [
      "Funcao",
      "Usuario",
      ];
  }
}

ContAjuda.knex(connections.plano);

export type TContAjuda = ModelObject<ContAjuda>;
