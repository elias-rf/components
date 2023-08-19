import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class SpedBlocoHeribeiro extends ModelBase {
  static tableName = "SpedBlocoHERIBEIRO";
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

SpedBlocoHeribeiro.knex(connections.plano);

export type TSpedBlocoHeribeiro = ModelObject<SpedBlocoHeribeiro>;
