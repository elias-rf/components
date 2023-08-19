import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class GrupoProdutos extends ModelBase {
  static tableName = "GrupoProdutos";
  static idColumn = ["CdGrupo"];

  CdGrupo!: number;
  Descricao!: string;
  FgListaPreco!: string;
  

  static getFields() {
    return [
      "CdGrupo",
      "Descricao",
      "FgListaPreco",
      ];
  }
}

GrupoProdutos.knex(connections.plano);

export type TGrupoProdutos = ModelObject<GrupoProdutos>;
