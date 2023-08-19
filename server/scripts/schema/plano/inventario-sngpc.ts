import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class InventarioSngpc extends ModelBase {
  static tableName = "InventarioSNGPC";
  static idColumn = [];

  CdFilial!: number;
  CdProduto!: string;
  DtBase!: Date;
  NumLote!: string;
  Quantidade!: number;
  NumRegistroProduto!: string;
  Unidade!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "CdProduto",
      "DtBase",
      "NumLote",
      "Quantidade",
      "NumRegistroProduto",
      "Unidade",
      ];
  }
}

InventarioSngpc.knex(connections.plano);

export type TInventarioSngpc = ModelObject<InventarioSngpc>;
