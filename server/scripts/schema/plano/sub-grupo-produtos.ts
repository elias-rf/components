import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class SubGrupoProdutos extends ModelBase {
  static tableName = "SubGrupoProdutos";
  static idColumn = ["CdSubGrupo"];

  CdSubGrupo!: number;
  Descricao!: string;
  FgListaPreco!: string;
  

  static getFields() {
    return [
      "CdSubGrupo",
      "Descricao",
      "FgListaPreco",
      ];
  }
}

SubGrupoProdutos.knex(connections.plano);

export type TSubGrupoProdutos = ModelObject<SubGrupoProdutos>;
