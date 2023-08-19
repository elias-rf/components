import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class LocalEstoque extends ModelBase {
  static tableName = "LocalEstoque";
  static idColumn = ["CdLocalEstoque"];

  CdLocalEstoque!: number;
  NmLocalEstoque!: string;
  

  static getFields() {
    return [
      "CdLocalEstoque",
      "NmLocalEstoque",
      ];
  }
}

LocalEstoque.knex(connections.plano);

export type TLocalEstoque = ModelObject<LocalEstoque>;
