import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class EtiquetasLote extends ModelBase {
  static tableName = "EtiquetasLote";
  static idColumn = [];

  CdProduto!: string;
  CdLote!: string;
  Quantidade!: number;
  CdFilial!: number;
  

  static getFields() {
    return [
      "CdProduto",
      "CdLote",
      "Quantidade",
      "CdFilial",
      ];
  }
}

EtiquetasLote.knex(connections.plano);

export type TEtiquetasLote = ModelObject<EtiquetasLote>;
