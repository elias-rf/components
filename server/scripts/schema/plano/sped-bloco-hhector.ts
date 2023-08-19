import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class SpedBlocoHhector extends ModelBase {
  static tableName = "SpedBlocoHHECTOR";
  static idColumn = ["CdProduto"];

  CdProduto!: string;
  Quantidade!: number;
  VlUnitario!: number;
  

  static getFields() {
    return [
      "CdProduto",
      "Quantidade",
      "VlUnitario",
      ];
  }
}

SpedBlocoHhector.knex(connections.plano);

export type TSpedBlocoHhector = ModelObject<SpedBlocoHhector>;
