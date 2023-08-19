import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class SpedBlocoHnsilva extends ModelBase {
  static tableName = "SpedBlocoHNSILVA";
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

SpedBlocoHnsilva.knex(connections.plano);

export type TSpedBlocoHnsilva = ModelObject<SpedBlocoHnsilva>;
