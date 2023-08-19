import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ItemNotaIpi extends ModelBase {
  static tableName = "ItemNotaIPI";
  static idColumn = [];

  CdFilial!: number;
  NumNota!: number;
  Serie!: string;
  Modelo!: string;
  CdProduto!: string;
  Sequencia!: number;
  CdEnquadramentoIPI!: string;
  ClasseEnquadramentoIPI!: string;
  CdSeloIPI!: string;
  QtdeSelo!: number;
  

  static getFields() {
    return [
      "CdFilial",
      "NumNota",
      "Serie",
      "Modelo",
      "CdProduto",
      "Sequencia",
      "CdEnquadramentoIPI",
      "ClasseEnquadramentoIPI",
      "CdSeloIPI",
      "QtdeSelo",
      ];
  }
}

ItemNotaIpi.knex(connections.plano);

export type TItemNotaIpi = ModelObject<ItemNotaIpi>;
