import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class SpedBlocoKhector extends ModelBase {
  static tableName = "SpedBlocoKHECTOR";
  static idColumn = ["CdProduto"];

  CdProduto!: string;
  Quantidade!: number;
  

  static getFields() {
    return [
      "CdProduto",
      "Quantidade",
      ];
  }
}

SpedBlocoKhector.knex(connections.plano);

export type TSpedBlocoKhector = ModelObject<SpedBlocoKhector>;
