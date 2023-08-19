import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class CadProEcommerce extends ModelBase {
  static tableName = "CadProEcommerce";
  static idColumn = [];

  CdProduto!: string;
  CdFilial!: number;
  Altura!: number;
  Largura!: number;
  Profundidade!: number;
  FgSincronizar!: string;
  

  static getFields() {
    return [
      "CdProduto",
      "CdFilial",
      "Altura",
      "Largura",
      "Profundidade",
      "FgSincronizar",
      ];
  }
}

CadProEcommerce.knex(connections.plano);

export type TCadProEcommerce = ModelObject<CadProEcommerce>;
