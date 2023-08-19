import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ContratoItem61303 extends ModelBase {
  static tableName = "ContratoItem61303";
  static idColumn = [];

  CdCliente!: number;
  Dia!: number;
  CdProduto!: string;
  Quantidade!: number;
  VlUnitario!: number;
  

  static getFields() {
    return [
      "CdCliente",
      "Dia",
      "CdProduto",
      "Quantidade",
      "VlUnitario",
      ];
  }
}

ContratoItem61303.knex(connections.plano);

export type TContratoItem61303 = ModelObject<ContratoItem61303>;
