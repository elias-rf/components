import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Temp411Qsantos extends ModelBase {
  static tableName = "Temp411QSANTOS";
  static idColumn = ["CdProduto"];

  CdProduto!: string;
  Descricao!: string;
  Inicial!: number;
  Entradas!: number;
  Saidas!: number;
  Balanco!: number;
  VlCustoUnit!: number;
  VlVendaUnit!: number;
  VlAtacadoUnit!: number;
  

  static getFields() {
    return [
      "CdProduto",
      "Descricao",
      "Inicial",
      "Entradas",
      "Saidas",
      "Balanco",
      "VlCustoUnit",
      "VlVendaUnit",
      "VlAtacadoUnit",
      ];
  }
}

Temp411Qsantos.knex(connections.plano);

export type TTemp411Qsantos = ModelObject<Temp411Qsantos>;
