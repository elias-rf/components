import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ItemNotaDescServico extends ModelBase {
  static tableName = "ItemNotaDescServico";
  static idColumn = [];

  CdFilial!: number;
  NumNota!: number;
  Serie!: string;
  CdProduto!: string;
  Descricao!: string;
  Modelo!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "NumNota",
      "Serie",
      "CdProduto",
      "Descricao",
      "Modelo",
      ];
  }
}

ItemNotaDescServico.knex(connections.plano);

export type TItemNotaDescServico = ModelObject<ItemNotaDescServico>;
